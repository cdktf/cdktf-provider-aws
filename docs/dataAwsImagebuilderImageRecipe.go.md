# `dataAwsImagebuilderImageRecipe` Submodule <a name="`dataAwsImagebuilderImageRecipe` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderImageRecipe <a name="DataAwsImagebuilderImageRecipe" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe aws_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipe(scope Construct, id *string, config DataAwsImagebuilderImageRecipeConfig) DataAwsImagebuilderImageRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig">DataAwsImagebuilderImageRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig">DataAwsImagebuilderImageRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipe_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.blockDeviceMapping">BlockDeviceMapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList">DataAwsImagebuilderImageRecipeBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.component">Component</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList">DataAwsImagebuilderImageRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dateCreated">DateCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.parentImage">ParentImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.userDataBase64">UserDataBase64</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BlockDeviceMapping`<sup>Required</sup> <a name="BlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.blockDeviceMapping"></a>

```go
func BlockDeviceMapping() DataAwsImagebuilderImageRecipeBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList">DataAwsImagebuilderImageRecipeBlockDeviceMappingList</a>

---

##### `Component`<sup>Required</sup> <a name="Component" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.component"></a>

```go
func Component() DataAwsImagebuilderImageRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList">DataAwsImagebuilderImageRecipeComponentList</a>

---

##### `DateCreated`<sup>Required</sup> <a name="DateCreated" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dateCreated"></a>

```go
func DateCreated() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ParentImage`<sup>Required</sup> <a name="ParentImage" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.parentImage"></a>

```go
func ParentImage() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `UserDataBase64`<sup>Required</sup> <a name="UserDataBase64" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.userDataBase64"></a>

```go
func UserDataBase64() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderImageRecipeBlockDeviceMapping <a name="DataAwsImagebuilderImageRecipeBlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

&dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping {

}
```


### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

&dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs {

}
```


### DataAwsImagebuilderImageRecipeComponent <a name="DataAwsImagebuilderImageRecipeComponent" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

&dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipeComponent {

}
```


### DataAwsImagebuilderImageRecipeComponentParameter <a name="DataAwsImagebuilderImageRecipeComponentParameter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

&dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipeComponentParameter {

}
```


### DataAwsImagebuilderImageRecipeConfig <a name="DataAwsImagebuilderImageRecipeConfig" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

&dataawsimagebuilderimagerecipe.DataAwsImagebuilderImageRecipeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingList <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeBlockDeviceMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderImageRecipeBlockDeviceMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice">NoDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping">DataAwsImagebuilderImageRecipeBlockDeviceMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs"></a>

```go
func Ebs() DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList</a>

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice"></a>

```go
func NoDevice() *string
```

- *Type:* *string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderImageRecipeBlockDeviceMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping">DataAwsImagebuilderImageRecipeBlockDeviceMapping</a>

---


### DataAwsImagebuilderImageRecipeComponentList <a name="DataAwsImagebuilderImageRecipeComponentList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeComponentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderImageRecipeComponentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderImageRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderImageRecipeComponentOutputReference <a name="DataAwsImagebuilderImageRecipeComponentOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeComponentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderImageRecipeComponentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.componentArn">ComponentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList">DataAwsImagebuilderImageRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent">DataAwsImagebuilderImageRecipeComponent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentArn`<sup>Required</sup> <a name="ComponentArn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.componentArn"></a>

```go
func ComponentArn() *string
```

- *Type:* *string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.parameter"></a>

```go
func Parameter() DataAwsImagebuilderImageRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList">DataAwsImagebuilderImageRecipeComponentParameterList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderImageRecipeComponent
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent">DataAwsImagebuilderImageRecipeComponent</a>

---


### DataAwsImagebuilderImageRecipeComponentParameterList <a name="DataAwsImagebuilderImageRecipeComponentParameterList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeComponentParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsImagebuilderImageRecipeComponentParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get"></a>

```go
func Get(index *f64) DataAwsImagebuilderImageRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsImagebuilderImageRecipeComponentParameterOutputReference <a name="DataAwsImagebuilderImageRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsimagebuilderimagerecipe"

dataawsimagebuilderimagerecipe.NewDataAwsImagebuilderImageRecipeComponentParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsImagebuilderImageRecipeComponentParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter">DataAwsImagebuilderImageRecipeComponentParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsImagebuilderImageRecipeComponentParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter">DataAwsImagebuilderImageRecipeComponentParameter</a>

---



