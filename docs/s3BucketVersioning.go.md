# `s3BucketVersioning` Submodule <a name="`s3BucketVersioning` Submodule" id="@cdktf/provider-aws.s3BucketVersioning"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketVersioningA <a name="S3BucketVersioningA" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning aws_s3_bucket_versioning}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

s3bucketversioning.NewS3BucketVersioningA(scope Construct, id *string, config S3BucketVersioningAConfig) S3BucketVersioningA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig">S3BucketVersioningAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig">S3BucketVersioningAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.putVersioningConfiguration">PutVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetMfa">ResetMfa</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVersioningConfiguration` <a name="PutVersioningConfiguration" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.putVersioningConfiguration"></a>

```go
func PutVersioningConfiguration(value S3BucketVersioningVersioningConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.putVersioningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

---

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetId"></a>

```go
func ResetId()
```

##### `ResetMfa` <a name="ResetMfa" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.resetMfa"></a>

```go
func ResetMfa()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

s3bucketversioning.S3BucketVersioningA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

s3bucketversioning.S3BucketVersioningA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

s3bucketversioning.S3BucketVersioningA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.versioningConfiguration">VersioningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference">S3BucketVersioningVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.mfaInput">MfaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.versioningConfigurationInput">VersioningConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.mfa">Mfa</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VersioningConfiguration`<sup>Required</sup> <a name="VersioningConfiguration" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.versioningConfiguration"></a>

```go
func VersioningConfiguration() S3BucketVersioningVersioningConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference">S3BucketVersioningVersioningConfigurationOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaInput`<sup>Optional</sup> <a name="MfaInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.mfaInput"></a>

```go
func MfaInput() *string
```

- *Type:* *string

---

##### `VersioningConfigurationInput`<sup>Optional</sup> <a name="VersioningConfigurationInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.versioningConfigurationInput"></a>

```go
func VersioningConfigurationInput() S3BucketVersioningVersioningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mfa`<sup>Required</sup> <a name="Mfa" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.mfa"></a>

```go
func Mfa() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketVersioningAConfig <a name="S3BucketVersioningAConfig" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

&s3bucketversioning.S3BucketVersioningAConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	VersioningConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration,
	ExpectedBucketOwner: *string,
	Id: *string,
	Mfa: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#bucket S3BucketVersioningA#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.versioningConfiguration">VersioningConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | versioning_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#expected_bucket_owner S3BucketVersioningA#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#id S3BucketVersioningA#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.mfa">Mfa</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#mfa S3BucketVersioningA#mfa}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#bucket S3BucketVersioningA#bucket}.

---

##### `VersioningConfiguration`<sup>Required</sup> <a name="VersioningConfiguration" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.versioningConfiguration"></a>

```go
VersioningConfiguration S3BucketVersioningVersioningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

versioning_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#versioning_configuration S3BucketVersioningA#versioning_configuration}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#expected_bucket_owner S3BucketVersioningA#expected_bucket_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#id S3BucketVersioningA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mfa`<sup>Optional</sup> <a name="Mfa" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningAConfig.property.mfa"></a>

```go
Mfa *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#mfa S3BucketVersioningA#mfa}.

---

### S3BucketVersioningVersioningConfiguration <a name="S3BucketVersioningVersioningConfiguration" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

&s3bucketversioning.S3BucketVersioningVersioningConfiguration {
	Status: *string,
	MfaDelete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#status S3BucketVersioningA#status}. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.mfaDelete">MfaDelete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#mfa_delete S3BucketVersioningA#mfa_delete}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#status S3BucketVersioningA#status}.

---

##### `MfaDelete`<sup>Optional</sup> <a name="MfaDelete" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration.property.mfaDelete"></a>

```go
MfaDelete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_versioning#mfa_delete S3BucketVersioningA#mfa_delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketVersioningVersioningConfigurationOutputReference <a name="S3BucketVersioningVersioningConfigurationOutputReference" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/s3bucketversioning"

s3bucketversioning.NewS3BucketVersioningVersioningConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3BucketVersioningVersioningConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resetMfaDelete">ResetMfaDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMfaDelete` <a name="ResetMfaDelete" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.resetMfaDelete"></a>

```go
func ResetMfaDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDeleteInput">MfaDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDelete">MfaDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MfaDeleteInput`<sup>Optional</sup> <a name="MfaDeleteInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDeleteInput"></a>

```go
func MfaDeleteInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `MfaDelete`<sup>Required</sup> <a name="MfaDelete" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.mfaDelete"></a>

```go
func MfaDelete() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() S3BucketVersioningVersioningConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketVersioning.S3BucketVersioningVersioningConfiguration">S3BucketVersioningVersioningConfiguration</a>

---



