# `s3BucketObject` Submodule <a name="`s3BucketObject` Submodule" id="@cdktf/provider-aws.s3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObject <a name="S3BucketObject" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object aws_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobject"

s3bucketobject.NewS3BucketObject(scope Construct, id *string, config S3BucketObjectConfig) S3BucketObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig">S3BucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig">S3BucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockLegalHoldStatus">ResetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetSourceHash">ResetSourceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetAcl"></a>

```go
func ResetAcl()
```

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetBucketKeyEnabled"></a>

```go
func ResetBucketKeyEnabled()
```

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetCacheControl"></a>

```go
func ResetCacheControl()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentBase64"></a>

```go
func ResetContentBase64()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentLanguage"></a>

```go
func ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetObjectLockLegalHoldStatus` <a name="ResetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockLegalHoldStatus"></a>

```go
func ResetObjectLockLegalHoldStatus()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockMode"></a>

```go
func ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetObjectLockRetainUntilDate"></a>

```go
func ResetObjectLockRetainUntilDate()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetServerSideEncryption"></a>

```go
func ResetServerSideEncryption()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetSource"></a>

```go
func ResetSource()
```

##### `ResetSourceHash` <a name="ResetSourceHash" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetSourceHash"></a>

```go
func ResetSourceHash()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetStorageClass"></a>

```go
func ResetStorageClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.resetWebsiteRedirect"></a>

```go
func ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobject"

s3bucketobject.S3BucketObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobject"

s3bucketobject.S3BucketObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobject"

s3bucketobject.S3BucketObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cacheControlInput">CacheControlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentBase64Input">ContentBase64Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockLegalHoldStatusInput">ObjectLockLegalHoldStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceHashInput">SourceHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cacheControl">CacheControl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceHash">SourceHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketKeyEnabledInput"></a>

```go
func BucketKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cacheControlInput"></a>

```go
func CacheControlInput() *string
```

- *Type:* *string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentBase64Input"></a>

```go
func ContentBase64Input() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentLanguageInput"></a>

```go
func ContentLanguageInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ObjectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockLegalHoldStatusInput"></a>

```go
func ObjectLockLegalHoldStatusInput() *string
```

- *Type:* *string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockModeInput"></a>

```go
func ObjectLockModeInput() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockRetainUntilDateInput"></a>

```go
func ObjectLockRetainUntilDateInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput"></a>

```go
func ServerSideEncryptionInput() *string
```

- *Type:* *string

---

##### `SourceHashInput`<sup>Optional</sup> <a name="SourceHashInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceHashInput"></a>

```go
func SourceHashInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.websiteRedirectInput"></a>

```go
func WebsiteRedirectInput() *string
```

- *Type:* *string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.bucketKeyEnabled"></a>

```go
func BucketKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.cacheControl"></a>

```go
func CacheControl() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentBase64"></a>

```go
func ContentBase64() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentLanguage"></a>

```go
func ContentLanguage() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ObjectLockLegalHoldStatus`<sup>Required</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockLegalHoldStatus"></a>

```go
func ObjectLockLegalHoldStatus() *string
```

- *Type:* *string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockMode"></a>

```go
func ObjectLockMode() *string
```

- *Type:* *string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.objectLockRetainUntilDate"></a>

```go
func ObjectLockRetainUntilDate() *string
```

- *Type:* *string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.serverSideEncryption"></a>

```go
func ServerSideEncryption() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceHash`<sup>Required</sup> <a name="SourceHash" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.sourceHash"></a>

```go
func SourceHash() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.websiteRedirect"></a>

```go
func WebsiteRedirect() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketObject.S3BucketObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectConfig <a name="S3BucketObjectConfig" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketobject"

&s3bucketobject.S3BucketObjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	Acl: *string,
	BucketKeyEnabled: interface{},
	CacheControl: *string,
	Content: *string,
	ContentBase64: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentLanguage: *string,
	ContentType: *string,
	Etag: *string,
	ForceDestroy: interface{},
	Id: *string,
	KmsKeyId: *string,
	Metadata: *map[string]*string,
	ObjectLockLegalHoldStatus: *string,
	ObjectLockMode: *string,
	ObjectLockRetainUntilDate: *string,
	ServerSideEncryption: *string,
	Source: *string,
	SourceHash: *string,
	StorageClass: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	WebsiteRedirect: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#bucket S3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#key S3BucketObject#key}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.acl">Acl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#acl S3BucketObject#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#bucket_key_enabled S3BucketObject#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.cacheControl">CacheControl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#cache_control S3BucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content S3BucketObject#content}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentBase64">ContentBase64</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_base64 S3BucketObject#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_disposition S3BucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_encoding S3BucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentLanguage">ContentLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_language S3BucketObject#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_type S3BucketObject#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#etag S3BucketObject#etag}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#force_destroy S3BucketObject#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#id S3BucketObject#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#kms_key_id S3BucketObject#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#metadata S3BucketObject#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockLegalHoldStatus">ObjectLockLegalHoldStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_legal_hold_status S3BucketObject#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_mode S3BucketObject#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_retain_until_date S3BucketObject#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#source S3BucketObject#source}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.sourceHash">SourceHash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#source_hash S3BucketObject#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.storageClass">StorageClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#storage_class S3BucketObject#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#tags S3BucketObject#tags}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#tags_all S3BucketObject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#website_redirect S3BucketObject#website_redirect}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#bucket S3BucketObject#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#key S3BucketObject#key}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#acl S3BucketObject#acl}.

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.bucketKeyEnabled"></a>

```go
BucketKeyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#bucket_key_enabled S3BucketObject#bucket_key_enabled}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.cacheControl"></a>

```go
CacheControl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#cache_control S3BucketObject#cache_control}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content S3BucketObject#content}.

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentBase64"></a>

```go
ContentBase64 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_base64 S3BucketObject#content_base64}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_disposition S3BucketObject#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_encoding S3BucketObject#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentLanguage"></a>

```go
ContentLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_language S3BucketObject#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#content_type S3BucketObject#content_type}.

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#etag S3BucketObject#etag}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#force_destroy S3BucketObject#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#id S3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#kms_key_id S3BucketObject#kms_key_id}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#metadata S3BucketObject#metadata}.

---

##### `ObjectLockLegalHoldStatus`<sup>Optional</sup> <a name="ObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockLegalHoldStatus"></a>

```go
ObjectLockLegalHoldStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_legal_hold_status S3BucketObject#object_lock_legal_hold_status}.

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockMode"></a>

```go
ObjectLockMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_mode S3BucketObject#object_lock_mode}.

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.objectLockRetainUntilDate"></a>

```go
ObjectLockRetainUntilDate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#object_lock_retain_until_date S3BucketObject#object_lock_retain_until_date}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption"></a>

```go
ServerSideEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#source S3BucketObject#source}.

---

##### `SourceHash`<sup>Optional</sup> <a name="SourceHash" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.sourceHash"></a>

```go
SourceHash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#source_hash S3BucketObject#source_hash}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#storage_class S3BucketObject#storage_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#tags S3BucketObject#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#tags_all S3BucketObject#tags_all}.

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-aws.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect"></a>

```go
WebsiteRedirect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object#website_redirect S3BucketObject#website_redirect}.

---



