# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-aws.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy aws_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

new s3ObjectCopy.S3ObjectCopy(scope: Construct, id: string, config: S3ObjectCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">resetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">resetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">resetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">resetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm">resetCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey">resetCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5">resetCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner">resetExpectedSourceBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext">resetKmsEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">resetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus">resetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">resetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">resetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">resetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">resetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putGrant` <a name="putGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant"></a>

```typescript
public putGrant(value: IResolvable | S3ObjectCopyGrant[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled"></a>

```typescript
public resetBucketKeyEnabled(): void
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCopyIfMatch` <a name="resetCopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```typescript
public resetCopyIfMatch(): void
```

##### `resetCopyIfModifiedSince` <a name="resetCopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```typescript
public resetCopyIfModifiedSince(): void
```

##### `resetCopyIfNoneMatch` <a name="resetCopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```typescript
public resetCopyIfNoneMatch(): void
```

##### `resetCopyIfUnmodifiedSince` <a name="resetCopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```typescript
public resetCopyIfUnmodifiedSince(): void
```

##### `resetCustomerAlgorithm` <a name="resetCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm"></a>

```typescript
public resetCustomerAlgorithm(): void
```

##### `resetCustomerKey` <a name="resetCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey"></a>

```typescript
public resetCustomerKey(): void
```

##### `resetCustomerKeyMd5` <a name="resetCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5"></a>

```typescript
public resetCustomerKeyMd5(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetExpectedSourceBucketOwner` <a name="resetExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner"></a>

```typescript
public resetExpectedSourceBucketOwner(): void
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```typescript
public resetExpires(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetGrant` <a name="resetGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsEncryptionContext` <a name="resetKmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext"></a>

```typescript
public resetKmsEncryptionContext(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataDirective` <a name="resetMetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```typescript
public resetMetadataDirective(): void
```

##### `resetObjectLockLegalHoldStatus` <a name="resetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus"></a>

```typescript
public resetObjectLockLegalHoldStatus(): void
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```typescript
public resetObjectLockMode(): void
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```typescript
public resetObjectLockRetainUntilDate(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetSourceCustomerAlgorithm` <a name="resetSourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```typescript
public resetSourceCustomerAlgorithm(): void
```

##### `resetSourceCustomerKey` <a name="resetSourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```typescript
public resetSourceCustomerKey(): void
```

##### `resetSourceCustomerKeyMd5` <a name="resetSourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```typescript
public resetSourceCustomerKeyMd5(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTaggingDirective` <a name="resetTaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```typescript
public resetTaggingDirective(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

s3ObjectCopy.S3ObjectCopy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

s3ObjectCopy.S3ObjectCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

s3ObjectCopy.S3ObjectCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged">requestCharged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId">sourceVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copyIfMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copyIfModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copyIfNoneMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copyIfUnmodifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput">customerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput">customerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input">customerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput">expectedSourceBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput">kmsEncryptionContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadataDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput">objectLockLegalHoldStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">objectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">sourceCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">sourceCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">sourceCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">taggingDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copyIfMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm">customerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey">customerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5">customerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner">expectedSourceBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadataDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">taggingDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant"></a>

```typescript
public readonly grant: S3ObjectCopyGrantList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a>

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `requestCharged`<sup>Required</sup> <a name="requestCharged" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged"></a>

```typescript
public readonly requestCharged: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sourceVersionId`<sup>Required</sup> <a name="sourceVersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId"></a>

```typescript
public readonly sourceVersionId: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput"></a>

```typescript
public readonly bucketKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `copyIfMatchInput`<sup>Optional</sup> <a name="copyIfMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```typescript
public readonly copyIfMatchInput: string;
```

- *Type:* string

---

##### `copyIfModifiedSinceInput`<sup>Optional</sup> <a name="copyIfModifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```typescript
public readonly copyIfModifiedSinceInput: string;
```

- *Type:* string

---

##### `copyIfNoneMatchInput`<sup>Optional</sup> <a name="copyIfNoneMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```typescript
public readonly copyIfNoneMatchInput: string;
```

- *Type:* string

---

##### `copyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="copyIfUnmodifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```typescript
public readonly copyIfUnmodifiedSinceInput: string;
```

- *Type:* string

---

##### `customerAlgorithmInput`<sup>Optional</sup> <a name="customerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput"></a>

```typescript
public readonly customerAlgorithmInput: string;
```

- *Type:* string

---

##### `customerKeyInput`<sup>Optional</sup> <a name="customerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput"></a>

```typescript
public readonly customerKeyInput: string;
```

- *Type:* string

---

##### `customerKeyMd5Input`<sup>Optional</sup> <a name="customerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input"></a>

```typescript
public readonly customerKeyMd5Input: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `expectedSourceBucketOwnerInput`<sup>Optional</sup> <a name="expectedSourceBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput"></a>

```typescript
public readonly expectedSourceBucketOwnerInput: string;
```

- *Type:* string

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```typescript
public readonly expiresInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3ObjectCopyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `kmsEncryptionContextInput`<sup>Optional</sup> <a name="kmsEncryptionContextInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput"></a>

```typescript
public readonly kmsEncryptionContextInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `metadataDirectiveInput`<sup>Optional</sup> <a name="metadataDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```typescript
public readonly metadataDirectiveInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `objectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="objectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput"></a>

```typescript
public readonly objectLockLegalHoldStatusInput: string;
```

- *Type:* string

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```typescript
public readonly objectLockModeInput: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```typescript
public readonly objectLockRetainUntilDateInput: string;
```

- *Type:* string

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: string;
```

- *Type:* string

---

##### `sourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="sourceCustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```typescript
public readonly sourceCustomerAlgorithmInput: string;
```

- *Type:* string

---

##### `sourceCustomerKeyInput`<sup>Optional</sup> <a name="sourceCustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```typescript
public readonly sourceCustomerKeyInput: string;
```

- *Type:* string

---

##### `sourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="sourceCustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```typescript
public readonly sourceCustomerKeyMd5Input: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `taggingDirectiveInput`<sup>Optional</sup> <a name="taggingDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```typescript
public readonly taggingDirectiveInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `copyIfMatch`<sup>Required</sup> <a name="copyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```typescript
public readonly copyIfMatch: string;
```

- *Type:* string

---

##### `copyIfModifiedSince`<sup>Required</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```typescript
public readonly copyIfModifiedSince: string;
```

- *Type:* string

---

##### `copyIfNoneMatch`<sup>Required</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```typescript
public readonly copyIfNoneMatch: string;
```

- *Type:* string

---

##### `copyIfUnmodifiedSince`<sup>Required</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```typescript
public readonly copyIfUnmodifiedSince: string;
```

- *Type:* string

---

##### `customerAlgorithm`<sup>Required</sup> <a name="customerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm"></a>

```typescript
public readonly customerAlgorithm: string;
```

- *Type:* string

---

##### `customerKey`<sup>Required</sup> <a name="customerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey"></a>

```typescript
public readonly customerKey: string;
```

- *Type:* string

---

##### `customerKeyMd5`<sup>Required</sup> <a name="customerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5"></a>

```typescript
public readonly customerKeyMd5: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `expectedSourceBucketOwner`<sup>Required</sup> <a name="expectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner"></a>

```typescript
public readonly expectedSourceBucketOwner: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kmsEncryptionContext`<sup>Required</sup> <a name="kmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext"></a>

```typescript
public readonly kmsEncryptionContext: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataDirective`<sup>Required</sup> <a name="metadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```typescript
public readonly metadataDirective: string;
```

- *Type:* string

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus"></a>

```typescript
public readonly objectLockLegalHoldStatus: string;
```

- *Type:* string

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceCustomerAlgorithm`<sup>Required</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```typescript
public readonly sourceCustomerAlgorithm: string;
```

- *Type:* string

---

##### `sourceCustomerKey`<sup>Required</sup> <a name="sourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```typescript
public readonly sourceCustomerKey: string;
```

- *Type:* string

---

##### `sourceCustomerKeyMd5`<sup>Required</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```typescript
public readonly sourceCustomerKeyMd5: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `taggingDirective`<sup>Required</sup> <a name="taggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```typescript
public readonly taggingDirective: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

const s3ObjectCopyConfig: s3ObjectCopy.S3ObjectCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copyIfMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm">customerAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey">customerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5">customerKeyMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner">expectedSourceBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant">grant</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadataDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer">requestPayer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">taggingDirective</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```typescript
public readonly copyIfMatch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```typescript
public readonly copyIfModifiedSince: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```typescript
public readonly copyIfNoneMatch: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```typescript
public readonly copyIfUnmodifiedSince: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `customerAlgorithm`<sup>Optional</sup> <a name="customerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm"></a>

```typescript
public readonly customerAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `customerKey`<sup>Optional</sup> <a name="customerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey"></a>

```typescript
public readonly customerKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `customerKeyMd5`<sup>Optional</sup> <a name="customerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5"></a>

```typescript
public readonly customerKeyMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="expectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner"></a>

```typescript
public readonly expectedSourceBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3ObjectCopyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncryptionContext`<sup>Optional</sup> <a name="kmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext"></a>

```typescript
public readonly kmsEncryptionContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```typescript
public readonly metadataDirective: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus"></a>

```typescript
public readonly objectLockLegalHoldStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```typescript
public readonly sourceCustomerAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```typescript
public readonly sourceCustomerKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```typescript
public readonly sourceCustomerKeyMd5: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```typescript
public readonly taggingDirective: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

### S3ObjectCopyGrant <a name="S3ObjectCopyGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

const s3ObjectCopyGrant: s3ObjectCopy.S3ObjectCopyGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectCopyGrantList <a name="S3ObjectCopyGrantList" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

new s3ObjectCopy.S3ObjectCopyGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get"></a>

```typescript
public get(index: number): S3ObjectCopyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectCopyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>[]

---


### S3ObjectCopyGrantOutputReference <a name="S3ObjectCopyGrantOutputReference" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-aws'

new s3ObjectCopy.S3ObjectCopyGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectCopyGrant | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a> | cdktf.IResolvable

---



