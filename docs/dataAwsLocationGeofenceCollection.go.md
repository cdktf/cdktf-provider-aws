# `dataAwsLocationGeofenceCollection` Submodule <a name="`dataAwsLocationGeofenceCollection` Submodule" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLocationGeofenceCollection <a name="DataAwsLocationGeofenceCollection" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection aws_location_geofence_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslocationgeofencecollection"

dataawslocationgeofencecollection.NewDataAwsLocationGeofenceCollection(scope Construct, id *string, config DataAwsLocationGeofenceCollectionConfig) DataAwsLocationGeofenceCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig">DataAwsLocationGeofenceCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig">DataAwsLocationGeofenceCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslocationgeofencecollection"

dataawslocationgeofencecollection.DataAwsLocationGeofenceCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslocationgeofencecollection"

dataawslocationgeofencecollection.DataAwsLocationGeofenceCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslocationgeofencecollection"

dataawslocationgeofencecollection.DataAwsLocationGeofenceCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionArn">CollectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionNameInput">CollectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionName">CollectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CollectionArn`<sup>Required</sup> <a name="CollectionArn" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionArn"></a>

```go
func CollectionArn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionNameInput`<sup>Optional</sup> <a name="CollectionNameInput" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionNameInput"></a>

```go
func CollectionNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.collectionName"></a>

```go
func CollectionName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLocationGeofenceCollectionConfig <a name="DataAwsLocationGeofenceCollectionConfig" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawslocationgeofencecollection"

&dataawslocationgeofencecollection.DataAwsLocationGeofenceCollectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionName: *string,
	Id: *string,
	KmsKeyId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.collectionName">CollectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#collection_name DataAwsLocationGeofenceCollection#collection_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#id DataAwsLocationGeofenceCollection#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#kms_key_id DataAwsLocationGeofenceCollection#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#tags DataAwsLocationGeofenceCollection#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionName`<sup>Required</sup> <a name="CollectionName" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.collectionName"></a>

```go
CollectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#collection_name DataAwsLocationGeofenceCollection#collection_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#id DataAwsLocationGeofenceCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#kms_key_id DataAwsLocationGeofenceCollection#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsLocationGeofenceCollection.DataAwsLocationGeofenceCollectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/location_geofence_collection#tags DataAwsLocationGeofenceCollection#tags}.

---



