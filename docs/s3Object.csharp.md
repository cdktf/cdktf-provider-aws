# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-aws.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-aws.s3Object.S3Object"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object aws_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3Object.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3Object(Construct Scope, string Id, S3ObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig">S3ObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus">ResetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSourceHash">ResetSourceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3Object.S3Object.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3Object.S3Object.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3Object.S3Object.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3Object.S3Object.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-aws.s3Object.S3Object.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled"></a>

```csharp
private void ResetBucketKeyEnabled()
```

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-aws.s3Object.S3Object.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-aws.s3Object.S3Object.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-aws.s3Object.S3Object.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-aws.s3Object.S3Object.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-aws.s3Object.S3Object.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3Object.S3Object.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-aws.s3Object.S3Object.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetObjectLockLegalHoldStatus` <a name="ResetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus"></a>

```csharp
private void ResetObjectLockLegalHoldStatus()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode"></a>

```csharp
private void ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```csharp
private void ResetObjectLockRetainUntilDate()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.s3Object.S3Object.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktf/provider-aws.s3Object.S3Object.resetSourceHash"></a>

```csharp
private void ResetSourceHash()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.s3Object.S3Object.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3Object.S3Object.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.s3Object.S3Object.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect"></a>

```csharp
private void ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3Object.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3Object.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

S3Object.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput">ObjectLockLegalHoldStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput">SourceHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHash">SourceHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3Object.S3Object.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3Object.S3Object.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3Object.S3Object.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3Object.S3Object.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3Object.S3Object.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3Object.S3Object.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3Object.S3Object.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3Object.S3Object.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.s3Object.S3Object.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-aws.s3Object.S3Object.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput"></a>

```csharp
public object BucketKeyEnabledInput { get; }
```

- *Type:* object

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-aws.s3Object.S3Object.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3Object.S3Object.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.s3Object.S3Object.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput"></a>

```csharp
public string ObjectLockLegalHoldStatusInput { get; }
```

- *Type:* string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput"></a>

```csharp
public string ObjectLockModeInput { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```csharp
public string ObjectLockRetainUntilDateInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```csharp
public string ServerSideEncryptionInput { get; }
```

- *Type:* string

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput"></a>

```csharp
public string SourceHashInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput"></a>

```csharp
public string WebsiteRedirectInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-aws.s3Object.S3Object.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3Object.S3Object.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled"></a>

```csharp
public object BucketKeyEnabled { get; }
```

- *Type:* object

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.s3Object.S3Object.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.s3Object.S3Object.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.s3Object.S3Object.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3Object.S3Object.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3Object.S3Object.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.s3Object.S3Object.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldStatus`<sup>Required</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; }
```

- *Type:* string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; }
```

- *Type:* string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3Object.S3Object.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHash"></a>

```csharp
public string SourceHash { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3Object.S3Object.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-aws.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new S3ObjectConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Key,
    string Acl = null,
    object BucketKeyEnabled = null,
    string CacheControl = null,
    string Content = null,
    string ContentBase64 = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    string Etag = null,
    object ForceDestroy = null,
    string Id = null,
    string KmsKeyId = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string ObjectLockLegalHoldStatus = null,
    string ObjectLockMode = null,
    string ObjectLockRetainUntilDate = null,
    string ServerSideEncryption = null,
    string Source = null,
    string SourceHash = null,
    string StorageClass = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string WebsiteRedirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash">SourceHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}.

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled"></a>

```csharp
public object BucketKeyEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}.

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}.

---

##### `ObjectLockLegalHoldStatus`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus"></a>

```csharp
public string ObjectLockLegalHoldStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}.

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash"></a>

```csharp
public string SourceHash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}.

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}.

---



