# `dataAwsS3BucketObjects` Submodule <a name="`dataAwsS3BucketObjects` Submodule" id="@cdktf/provider-aws.dataAwsS3BucketObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObjects <a name="DataAwsS3BucketObjects" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects aws_s3_bucket_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3bucketobjects"

dataawss3bucketobjects.NewDataAwsS3BucketObjects(scope Construct, id *string, config DataAwsS3BucketObjectsConfig) DataAwsS3BucketObjects
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig">DataAwsS3BucketObjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig">DataAwsS3BucketObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetFetchOwner">ResetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetMaxKeys">ResetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetStartAfter">ResetStartAfter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetEncodingType"></a>

```go
func ResetEncodingType()
```

##### `ResetFetchOwner` <a name="ResetFetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetFetchOwner"></a>

```go
func ResetFetchOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxKeys` <a name="ResetMaxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetMaxKeys"></a>

```go
func ResetMaxKeys()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetStartAfter` <a name="ResetStartAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.resetStartAfter"></a>

```go
func ResetStartAfter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3bucketobjects"

dataawss3bucketobjects.DataAwsS3BucketObjects_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3bucketobjects"

dataawss3bucketobjects.DataAwsS3BucketObjects_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3bucketobjects"

dataawss3bucketobjects.DataAwsS3BucketObjects_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.commonPrefixes">CommonPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.keys">Keys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwnerInput">FetchOwnerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeysInput">MaxKeysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfterInput">StartAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingType">EncodingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwner">FetchOwner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeys">MaxKeys</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfter">StartAfter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CommonPrefixes`<sup>Required</sup> <a name="CommonPrefixes" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.commonPrefixes"></a>

```go
func CommonPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.keys"></a>

```go
func Keys() *[]*string
```

- *Type:* *[]*string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingTypeInput"></a>

```go
func EncodingTypeInput() *string
```

- *Type:* *string

---

##### `FetchOwnerInput`<sup>Optional</sup> <a name="FetchOwnerInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwnerInput"></a>

```go
func FetchOwnerInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxKeysInput`<sup>Optional</sup> <a name="MaxKeysInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeysInput"></a>

```go
func MaxKeysInput() *f64
```

- *Type:* *f64

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StartAfterInput`<sup>Optional</sup> <a name="StartAfterInput" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfterInput"></a>

```go
func StartAfterInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.encodingType"></a>

```go
func EncodingType() *string
```

- *Type:* *string

---

##### `FetchOwner`<sup>Required</sup> <a name="FetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.fetchOwner"></a>

```go
func FetchOwner() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxKeys`<sup>Required</sup> <a name="MaxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.maxKeys"></a>

```go
func MaxKeys() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StartAfter`<sup>Required</sup> <a name="StartAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.startAfter"></a>

```go
func StartAfter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjects.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectsConfig <a name="DataAwsS3BucketObjectsConfig" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawss3bucketobjects"

&dataawss3bucketobjects.DataAwsS3BucketObjectsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Delimiter: *string,
	EncodingType: *string,
	FetchOwner: interface{},
	Id: *string,
	MaxKeys: *f64,
	Prefix: *string,
	StartAfter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#bucket DataAwsS3BucketObjects#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#delimiter DataAwsS3BucketObjects#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.encodingType">EncodingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#encoding_type DataAwsS3BucketObjects#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.fetchOwner">FetchOwner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#fetch_owner DataAwsS3BucketObjects#fetch_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#id DataAwsS3BucketObjects#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.maxKeys">MaxKeys</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#max_keys DataAwsS3BucketObjects#max_keys}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#prefix DataAwsS3BucketObjects#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.startAfter">StartAfter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#start_after DataAwsS3BucketObjects#start_after}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#bucket DataAwsS3BucketObjects#bucket}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#delimiter DataAwsS3BucketObjects#delimiter}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.encodingType"></a>

```go
EncodingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#encoding_type DataAwsS3BucketObjects#encoding_type}.

---

##### `FetchOwner`<sup>Optional</sup> <a name="FetchOwner" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.fetchOwner"></a>

```go
FetchOwner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#fetch_owner DataAwsS3BucketObjects#fetch_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#id DataAwsS3BucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxKeys`<sup>Optional</sup> <a name="MaxKeys" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.maxKeys"></a>

```go
MaxKeys *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#max_keys DataAwsS3BucketObjects#max_keys}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#prefix DataAwsS3BucketObjects#prefix}.

---

##### `StartAfter`<sup>Optional</sup> <a name="StartAfter" id="@cdktf/provider-aws.dataAwsS3BucketObjects.DataAwsS3BucketObjectsConfig.property.startAfter"></a>

```go
StartAfter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_bucket_objects#start_after DataAwsS3BucketObjects#start_after}.

---



