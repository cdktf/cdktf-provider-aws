# `dataAwsS3BucketObject` Submodule <a name="`dataAwsS3BucketObject` Submodule" id="@cdktf/provider-aws.dataAwsS3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObject <a name="DataAwsS3BucketObject" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object aws_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer"></a>

```typescript
import { dataAwsS3BucketObject } from '@cdktf/provider-aws'

new dataAwsS3BucketObject.DataAwsS3BucketObject(scope: Construct, id: string, config: DataAwsS3BucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig">DataAwsS3BucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig">DataAwsS3BucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRange` <a name="resetRange" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct"></a>

```typescript
import { dataAwsS3BucketObject } from '@cdktf/provider-aws'

dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement"></a>

```typescript
import { dataAwsS3BucketObject } from '@cdktf/provider-aws'

dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource"></a>

```typescript
import { dataAwsS3BucketObject } from '@cdktf/provider-aws'

dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLength">contentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.websiteRedirectLocation">websiteRedirectLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentLength"></a>

```typescript
public readonly contentLength: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockLegalHoldStatus"></a>

```typescript
public readonly objectLockLegalHoldStatus: string;
```

- *Type:* string

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `sseKmsKeyId`<sup>Required</sup> <a name="sseKmsKeyId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `websiteRedirectLocation`<sup>Required</sup> <a name="websiteRedirectLocation" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.websiteRedirectLocation"></a>

```typescript
public readonly websiteRedirectLocation: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectConfig <a name="DataAwsS3BucketObjectConfig" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.Initializer"></a>

```typescript
import { dataAwsS3BucketObject } from '@cdktf/provider-aws'

const dataAwsS3BucketObjectConfig: dataAwsS3BucketObject.DataAwsS3BucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.range">range</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#bucket DataAwsS3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#key DataAwsS3BucketObject#key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#id DataAwsS3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#range DataAwsS3BucketObject#range}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#tags DataAwsS3BucketObject#tags}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-aws.dataAwsS3BucketObject.DataAwsS3BucketObjectConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_object#version_id DataAwsS3BucketObject#version_id}.

---



