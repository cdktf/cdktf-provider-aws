# `appconfigEnvironment` Submodule <a name="`appconfigEnvironment` Submodule" id="@cdktf/provider-aws.appconfigEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigEnvironment <a name="AppconfigEnvironment" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment aws_appconfig_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.NewAppconfigEnvironment(scope Construct, id *string, config AppconfigEnvironmentConfig) AppconfigEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor">PutMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor">ResetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMonitor` <a name="PutMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor"></a>

```go
func PutMonitor(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetMonitor` <a name="ResetMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor"></a>

```go
func ResetMonitor()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.AppconfigEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.AppconfigEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.AppconfigEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor">Monitor</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput">MonitorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Monitor`<sup>Required</sup> <a name="Monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor"></a>

```go
func Monitor() AppconfigEnvironmentMonitorList
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitorInput`<sup>Optional</sup> <a name="MonitorInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput"></a>

```go
func MonitorInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigEnvironmentConfig <a name="AppconfigEnvironmentConfig" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

&appconfigenvironment.AppconfigEnvironmentConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	Monitor: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor">Monitor</a></code> | <code>interface{}</code> | monitor block. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Monitor`<sup>Optional</sup> <a name="Monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor"></a>

```go
Monitor interface{}
```

- *Type:* interface{}

monitor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#monitor AppconfigEnvironment#monitor}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}.

---

### AppconfigEnvironmentMonitor <a name="AppconfigEnvironmentMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

&appconfigenvironment.AppconfigEnvironmentMonitor {
	AlarmArn: *string,
	AlarmRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn">AlarmArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}. |

---

##### `AlarmArn`<sup>Required</sup> <a name="AlarmArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn"></a>

```go
AlarmArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}.

---

##### `AlarmRoleArn`<sup>Optional</sup> <a name="AlarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn"></a>

```go
AlarmRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigEnvironmentMonitorList <a name="AppconfigEnvironmentMonitorList" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.NewAppconfigEnvironmentMonitorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppconfigEnvironmentMonitorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get"></a>

```go
func Get(index *f64) AppconfigEnvironmentMonitorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigEnvironmentMonitorOutputReference <a name="AppconfigEnvironmentMonitorOutputReference" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigenvironment"

appconfigenvironment.NewAppconfigEnvironmentMonitorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppconfigEnvironmentMonitorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn">ResetAlarmRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmRoleArn` <a name="ResetAlarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn"></a>

```go
func ResetAlarmRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput">AlarmArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput">AlarmRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn">AlarmArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmArnInput`<sup>Optional</sup> <a name="AlarmArnInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput"></a>

```go
func AlarmArnInput() *string
```

- *Type:* *string

---

##### `AlarmRoleArnInput`<sup>Optional</sup> <a name="AlarmRoleArnInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput"></a>

```go
func AlarmRoleArnInput() *string
```

- *Type:* *string

---

##### `AlarmArn`<sup>Required</sup> <a name="AlarmArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn"></a>

```go
func AlarmArn() *string
```

- *Type:* *string

---

##### `AlarmRoleArn`<sup>Required</sup> <a name="AlarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn"></a>

```go
func AlarmRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



