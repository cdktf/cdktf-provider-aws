# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-aws.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-aws.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object aws_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3Object.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

new s3Object.S3Object(scope: Construct, id: string, config: S3ObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider">putOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetChecksumAlgorithm">resetChecksumAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus">resetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideProvider">resetOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSourceHash">resetSourceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3Object.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3Object.S3Object.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3Object.S3Object.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3Object.S3Object.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3Object.S3Object.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3Object.S3Object.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3Object.S3Object.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3Object.S3Object.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3Object.S3Object.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3Object.S3Object.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3Object.S3Object.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOverrideProvider` <a name="putOverrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider"></a>

```typescript
public putOverrideProvider(value: S3ObjectOverrideProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3Object.S3Object.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled"></a>

```typescript
public resetBucketKeyEnabled(): void
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-aws.s3Object.S3Object.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetChecksumAlgorithm` <a name="resetChecksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3Object.resetChecksumAlgorithm"></a>

```typescript
public resetChecksumAlgorithm(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-aws.s3Object.S3Object.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-aws.s3Object.S3Object.resetContentBase64"></a>

```typescript
public resetContentBase64(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-aws.s3Object.S3Object.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-aws.s3Object.S3Object.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Object.S3Object.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.s3Object.S3Object.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetObjectLockLegalHoldStatus` <a name="resetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus"></a>

```typescript
public resetObjectLockLegalHoldStatus(): void
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode"></a>

```typescript
public resetObjectLockMode(): void
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```typescript
public resetObjectLockRetainUntilDate(): void
```

##### `resetOverrideProvider` <a name="resetOverrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideProvider"></a>

```typescript
public resetOverrideProvider(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.s3Object.S3Object.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceHash` <a name="resetSourceHash" id="@cdktf/provider-aws.s3Object.S3Object.resetSourceHash"></a>

```typescript
public resetSourceHash(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3Object.S3Object.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Object.S3Object.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.s3Object.S3Object.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

s3Object.S3Object.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

s3Object.S3Object.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

s3Object.S3Object.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

s3Object.S3Object.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3Object to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32">checksumCrc32</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32C">checksumCrc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumSha1">checksumSha1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumSha256">checksumSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.overrideProvider">overrideProvider</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput">checksumAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input">contentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput">objectLockLegalHoldStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput">objectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.overrideProviderInput">overrideProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput">sourceHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithm">checksumAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHash">sourceHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3Object.S3Object.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3Object.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3Object.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3Object.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Object.S3Object.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Object.S3Object.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3Object.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3Object.S3Object.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `checksumCrc32`<sup>Required</sup> <a name="checksumCrc32" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32"></a>

```typescript
public readonly checksumCrc32: string;
```

- *Type:* string

---

##### `checksumCrc32C`<sup>Required</sup> <a name="checksumCrc32C" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32C"></a>

```typescript
public readonly checksumCrc32C: string;
```

- *Type:* string

---

##### `checksumSha1`<sup>Required</sup> <a name="checksumSha1" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumSha1"></a>

```typescript
public readonly checksumSha1: string;
```

- *Type:* string

---

##### `checksumSha256`<sup>Required</sup> <a name="checksumSha256" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumSha256"></a>

```typescript
public readonly checksumSha256: string;
```

- *Type:* string

---

##### `overrideProvider`<sup>Required</sup> <a name="overrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.property.overrideProvider"></a>

```typescript
public readonly overrideProvider: S3ObjectOverrideProviderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.s3Object.S3Object.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3Object.S3Object.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput"></a>

```typescript
public readonly bucketKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `checksumAlgorithmInput`<sup>Optional</sup> <a name="checksumAlgorithmInput" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput"></a>

```typescript
public readonly checksumAlgorithmInput: string;
```

- *Type:* string

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input"></a>

```typescript
public readonly contentBase64Input: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-aws.s3Object.S3Object.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Object.S3Object.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.s3Object.S3Object.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `objectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="objectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput"></a>

```typescript
public readonly objectLockLegalHoldStatusInput: string;
```

- *Type:* string

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput"></a>

```typescript
public readonly objectLockModeInput: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```typescript
public readonly objectLockRetainUntilDateInput: string;
```

- *Type:* string

---

##### `overrideProviderInput`<sup>Optional</sup> <a name="overrideProviderInput" id="@cdktf/provider-aws.s3Object.S3Object.property.overrideProviderInput"></a>

```typescript
public readonly overrideProviderInput: S3ObjectOverrideProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: string;
```

- *Type:* string

---

##### `sourceHashInput`<sup>Optional</sup> <a name="sourceHashInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput"></a>

```typescript
public readonly sourceHashInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3Object.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3Object.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `checksumAlgorithm`<sup>Required</sup> <a name="checksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithm"></a>

```typescript
public readonly checksumAlgorithm: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3Object.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.s3Object.S3Object.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3Object.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3Object.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3Object.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus"></a>

```typescript
public readonly objectLockLegalHoldStatus: string;
```

- *Type:* string

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3Object.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceHash`<sup>Required</sup> <a name="sourceHash" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHash"></a>

```typescript
public readonly sourceHash: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3Object.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-aws.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

const s3ObjectConfig: s3Object.S3ObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm">checksumAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64">contentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider">overrideProvider</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | override_provider block. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash">sourceHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#bucket S3Object#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#key S3Object#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#acl S3Object#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#cache_control S3Object#cache_control}.

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="checksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm"></a>

```typescript
public readonly checksumAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content S3Object#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_base64 S3Object#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_disposition S3Object#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_encoding S3Object#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_language S3Object#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#content_type S3Object#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#etag S3Object#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#force_destroy S3Object#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#metadata S3Object#metadata}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus"></a>

```typescript
public readonly objectLockLegalHoldStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `overrideProvider`<sup>Optional</sup> <a name="overrideProvider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider"></a>

```typescript
public readonly overrideProvider: S3ObjectOverrideProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

override_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#override_provider S3Object#override_provider}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#source S3Object#source}.

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash"></a>

```typescript
public readonly sourceHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#source_hash S3Object#source_hash}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#storage_class S3Object#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags S3Object#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags_all S3Object#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#website_redirect S3Object#website_redirect}.

---

### S3ObjectOverrideProvider <a name="S3ObjectOverrideProvider" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

const s3ObjectOverrideProvider: s3Object.S3ObjectOverrideProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | default_tags block. |

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags"></a>

```typescript
public readonly defaultTags: S3ObjectOverrideProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#default_tags S3Object#default_tags}

---

### S3ObjectOverrideProviderDefaultTags <a name="S3ObjectOverrideProviderDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

const s3ObjectOverrideProviderDefaultTags: s3Object.S3ObjectOverrideProviderDefaultTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags S3Object#tags}. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/s3_object#tags S3Object#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectOverrideProviderDefaultTagsOutputReference <a name="S3ObjectOverrideProviderDefaultTagsOutputReference" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

new s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectOverrideProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---


### S3ObjectOverrideProviderOutputReference <a name="S3ObjectOverrideProviderOutputReference" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-aws'

new s3Object.S3ObjectOverrideProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags">putDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultTags` <a name="putDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags"></a>

```typescript
public putDefaultTags(value: S3ObjectOverrideProviderDefaultTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags"></a>

```typescript
public resetDefaultTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput">defaultTagsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultTags`<sup>Required</sup> <a name="defaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags"></a>

```typescript
public readonly defaultTags: S3ObjectOverrideProviderDefaultTagsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a>

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput"></a>

```typescript
public readonly defaultTagsInput: S3ObjectOverrideProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectOverrideProvider;
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---



