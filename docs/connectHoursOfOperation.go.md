# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktf/provider-aws.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation aws_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.NewConnectHoursOfOperation(scope Construct, id *string, config ConnectHoursOfOperationConfig) ConnectHoursOfOperation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.ConnectHoursOfOperation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.ConnectHoursOfOperation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.ConnectHoursOfOperation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">HoursOfOperationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId">HoursOfOperationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```go
func Config() ConnectHoursOfOperationConfigAList
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `HoursOfOperationArn`<sup>Required</sup> <a name="HoursOfOperationArn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```go
func HoursOfOperationArn() *string
```

- *Type:* *string

---

##### `HoursOfOperationId`<sup>Required</sup> <a name="HoursOfOperationId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId"></a>

```go
func HoursOfOperationId() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

&connecthoursofoperation.ConnectHoursOfOperationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: interface{},
	InstanceId: *string,
	Name: *string,
	TimeZone: *string,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#name ConnectHoursOfOperation#name}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#description ConnectHoursOfOperation#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#id ConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}.

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

&connecthoursofoperation.ConnectHoursOfOperationConfigA {
	Day: *string,
	EndTime: github.com/cdktf/cdktf-provider-aws-go/aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime,
	StartTime: github.com/cdktf/cdktf-provider-aws-go/aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">Day</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">EndTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```go
Day *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#day ConnectHoursOfOperation#day}.

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```go
EndTime ConnectHoursOfOperationConfigEndTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```go
StartTime ConnectHoursOfOperationConfigStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

&connecthoursofoperation.ConnectHoursOfOperationConfigEndTime {
	Hours: *f64,
	Minutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">Hours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

&connecthoursofoperation.ConnectHoursOfOperationConfigStartTime {
	Hours: *f64,
	Minutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.NewConnectHoursOfOperationConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectHoursOfOperationConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```go
func Get(index *f64) ConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.NewConnectHoursOfOperationConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectHoursOfOperationConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">PutEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndTime` <a name="PutEndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```go
func PutEndTime(value ConnectHoursOfOperationConfigEndTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```go
func PutStartTime(value ConnectHoursOfOperationConfigStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```go
func EndTime() ConnectHoursOfOperationConfigEndTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```go
func StartTime() ConnectHoursOfOperationConfigStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() ConnectHoursOfOperationConfigEndTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() ConnectHoursOfOperationConfigStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.NewConnectHoursOfOperationConfigEndTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectHoursOfOperationConfigEndTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectHoursOfOperationConfigEndTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connecthoursofoperation"

connecthoursofoperation.NewConnectHoursOfOperationConfigStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectHoursOfOperationConfigStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectHoursOfOperationConfigStartTime
```

- *Type:* <a href="#@cdktf/provider-aws.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---



