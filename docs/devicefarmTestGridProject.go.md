# `devicefarmTestGridProject` Submodule <a name="`devicefarmTestGridProject` Submodule" id="@cdktf/provider-aws.devicefarmTestGridProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmTestGridProject <a name="DevicefarmTestGridProject" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project aws_devicefarm_test_grid_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

devicefarmtestgridproject.NewDevicefarmTestGridProject(scope Construct, id *string, config DevicefarmTestGridProjectConfig) DevicefarmTestGridProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig">DevicefarmTestGridProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig">DevicefarmTestGridProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.putVpcConfig"></a>

```go
func PutVpcConfig(value DevicefarmTestGridProjectVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

devicefarmtestgridproject.DevicefarmTestGridProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

devicefarmtestgridproject.DevicefarmTestGridProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

devicefarmtestgridproject.DevicefarmTestGridProject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference">DevicefarmTestGridProjectVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.vpcConfig"></a>

```go
func VpcConfig() DevicefarmTestGridProjectVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference">DevicefarmTestGridProjectVpcConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.vpcConfigInput"></a>

```go
func VpcConfigInput() DevicefarmTestGridProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmTestGridProjectConfig <a name="DevicefarmTestGridProjectConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

&devicefarmtestgridproject.DevicefarmTestGridProjectConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#name DevicefarmTestGridProject#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#description DevicefarmTestGridProject#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#id DevicefarmTestGridProject#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#tags DevicefarmTestGridProject#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#tags_all DevicefarmTestGridProject#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a></code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#name DevicefarmTestGridProject#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#description DevicefarmTestGridProject#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#id DevicefarmTestGridProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#tags DevicefarmTestGridProject#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#tags_all DevicefarmTestGridProject#tags_all}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectConfig.property.vpcConfig"></a>

```go
VpcConfig DevicefarmTestGridProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#vpc_config DevicefarmTestGridProject#vpc_config}

---

### DevicefarmTestGridProjectVpcConfig <a name="DevicefarmTestGridProjectVpcConfig" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

&devicefarmtestgridproject.DevicefarmTestGridProjectVpcConfig {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#security_group_ids DevicefarmTestGridProject#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#subnet_ids DevicefarmTestGridProject#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#vpc_id DevicefarmTestGridProject#vpc_id}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#security_group_ids DevicefarmTestGridProject#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#subnet_ids DevicefarmTestGridProject#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_test_grid_project#vpc_id DevicefarmTestGridProject#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevicefarmTestGridProjectVpcConfigOutputReference <a name="DevicefarmTestGridProjectVpcConfigOutputReference" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/devicefarmtestgridproject"

devicefarmtestgridproject.NewDevicefarmTestGridProjectVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevicefarmTestGridProjectVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DevicefarmTestGridProjectVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.devicefarmTestGridProject.DevicefarmTestGridProjectVpcConfig">DevicefarmTestGridProjectVpcConfig</a>

---



