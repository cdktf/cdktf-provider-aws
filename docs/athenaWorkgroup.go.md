# `athenaWorkgroup` Submodule <a name="`athenaWorkgroup` Submodule" id="@cdktf/provider-aws.athenaWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkgroup <a name="AthenaWorkgroup" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup aws_athena_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroup(scope Construct, id *string, config AthenaWorkgroupConfig) AthenaWorkgroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig">AthenaWorkgroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig">AthenaWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration"></a>

```go
func PutConfiguration(value AthenaWorkgroupConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.AthenaWorkgroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.AthenaWorkgroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.AthenaWorkgroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput">ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configuration"></a>

```go
func Configuration() AthenaWorkgroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference">AthenaWorkgroupConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.configurationInput"></a>

```go
func ConfigurationInput() AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkgroupConfig <a name="AthenaWorkgroupConfig" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Configuration: github.com/cdktf/cdktf-provider-aws-go/aws.athenaWorkgroup.AthenaWorkgroupConfiguration,
	Description: *string,
	ForceDestroy: interface{},
	Id: *string,
	State: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#name AthenaWorkgroup#name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.configuration"></a>

```go
Configuration AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#configuration AthenaWorkgroup#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#description AthenaWorkgroup#description}.

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#id AthenaWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#state AthenaWorkgroup#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags AthenaWorkgroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#tags_all AthenaWorkgroup#tags_all}.

---

### AthenaWorkgroupConfiguration <a name="AthenaWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfiguration {
	BytesScannedCutoffPerQuery: *f64,
	EnforceWorkgroupConfiguration: interface{},
	EngineVersion: github.com/cdktf/cdktf-provider-aws-go/aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion,
	ExecutionRole: *string,
	PublishCloudwatchMetricsEnabled: interface{},
	RequesterPaysEnabled: interface{},
	ResultConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration">EnforceWorkgroupConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | engine_version block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration">ResultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | result_configuration block. |

---

##### `BytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```go
BytesScannedCutoffPerQuery *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.

---

##### `EnforceWorkgroupConfiguration`<sup>Optional</sup> <a name="EnforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.enforceWorkgroupConfiguration"></a>

```go
EnforceWorkgroupConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.engineVersion"></a>

```go
EngineVersion AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

engine_version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#engine_version AthenaWorkgroup#engine_version}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#execution_role AthenaWorkgroup#execution_role}.

---

##### `PublishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```go
PublishCloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.

---

##### `RequesterPaysEnabled`<sup>Optional</sup> <a name="RequesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.requesterPaysEnabled"></a>

```go
RequesterPaysEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}.

---

##### `ResultConfiguration`<sup>Optional</sup> <a name="ResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration.property.resultConfiguration"></a>

```go
ResultConfiguration AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

result_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}

---

### AthenaWorkgroupConfigurationEngineVersion <a name="AthenaWorkgroupConfigurationEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfigurationEngineVersion {
	SelectedEngineVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}. |

---

##### `SelectedEngineVersion`<sup>Optional</sup> <a name="SelectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```go
SelectedEngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}.

---

### AthenaWorkgroupConfigurationResultConfiguration <a name="AthenaWorkgroupConfigurationResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfigurationResultConfiguration {
	AclConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration,
	EncryptionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration,
	ExpectedBucketOwner: *string,
	OutputLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | acl_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}. |

---

##### `AclConfiguration`<sup>Optional</sup> <a name="AclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```go
AclConfiguration AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

acl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration.property.outputLocation"></a>

```go
OutputLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#output_location AthenaWorkgroup#output_location}.

---

### AthenaWorkgroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration {
	S3AclOption: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}. |

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```go
S3AclOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}.

---

### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

&athenaworkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
	EncryptionOption: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}. |

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```go
EncryptionOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkgroupConfigurationEngineVersionOutputReference <a name="AthenaWorkgroupConfigurationEngineVersionOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroupConfigurationEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkgroupConfigurationEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">ResetSelectedEngineVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelectedEngineVersion` <a name="ResetSelectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```go
func ResetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">EffectiveEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">SelectedEngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEngineVersion`<sup>Required</sup> <a name="EffectiveEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```go
func EffectiveEngineVersion() *string
```

- *Type:* *string

---

##### `SelectedEngineVersionInput`<sup>Optional</sup> <a name="SelectedEngineVersionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```go
func SelectedEngineVersionInput() *string
```

- *Type:* *string

---

##### `SelectedEngineVersion`<sup>Required</sup> <a name="SelectedEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```go
func SelectedEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---


### AthenaWorkgroupConfigurationOutputReference <a name="AthenaWorkgroupConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkgroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion">PutEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration">PutResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">ResetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration">ResetEnforceWorkgroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">ResetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled">ResetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration">ResetResultConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEngineVersion` <a name="PutEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion"></a>

```go
func PutEngineVersion(value AthenaWorkgroupConfigurationEngineVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `PutResultConfiguration` <a name="PutResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration"></a>

```go
func PutResultConfiguration(value AthenaWorkgroupConfigurationResultConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `ResetBytesScannedCutoffPerQuery` <a name="ResetBytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```go
func ResetBytesScannedCutoffPerQuery()
```

##### `ResetEnforceWorkgroupConfiguration` <a name="ResetEnforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEnforceWorkgroupConfiguration"></a>

```go
func ResetEnforceWorkgroupConfiguration()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetExecutionRole"></a>

```go
func ResetExecutionRole()
```

##### `ResetPublishCloudwatchMetricsEnabled` <a name="ResetPublishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```go
func ResetPublishCloudwatchMetricsEnabled()
```

##### `ResetRequesterPaysEnabled` <a name="ResetRequesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```go
func ResetRequesterPaysEnabled()
```

##### `ResetResultConfiguration` <a name="ResetResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.resetResultConfiguration"></a>

```go
func ResetResultConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration">ResultConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">BytesScannedCutoffPerQueryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput">EnforceWorkgroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput">EngineVersionInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">PublishCloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput">RequesterPaysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput">ResultConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration">EnforceWorkgroupConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersion"></a>

```go
func EngineVersion() AthenaWorkgroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersionOutputReference">AthenaWorkgroupConfigurationEngineVersionOutputReference</a>

---

##### `ResultConfiguration`<sup>Required</sup> <a name="ResultConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfiguration"></a>

```go
func ResultConfiguration() AthenaWorkgroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationOutputReference</a>

---

##### `BytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="BytesScannedCutoffPerQueryInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```go
func BytesScannedCutoffPerQueryInput() *f64
```

- *Type:* *f64

---

##### `EnforceWorkgroupConfigurationInput`<sup>Optional</sup> <a name="EnforceWorkgroupConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfigurationInput"></a>

```go
func EnforceWorkgroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.engineVersionInput"></a>

```go
func EngineVersionInput() AthenaWorkgroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationEngineVersion">AthenaWorkgroupConfigurationEngineVersion</a>

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `PublishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```go
func PublishCloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabledInput`<sup>Optional</sup> <a name="RequesterPaysEnabledInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```go
func RequesterPaysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResultConfigurationInput`<sup>Optional</sup> <a name="ResultConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```go
func ResultConfigurationInput() AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---

##### `BytesScannedCutoffPerQuery`<sup>Required</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```go
func BytesScannedCutoffPerQuery() *f64
```

- *Type:* *f64

---

##### `EnforceWorkgroupConfiguration`<sup>Required</sup> <a name="EnforceWorkgroupConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.enforceWorkgroupConfiguration"></a>

```go
func EnforceWorkgroupConfiguration() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `PublishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```go
func PublishCloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabled`<sup>Required</sup> <a name="RequesterPaysEnabled" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```go
func RequesterPaysEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AthenaWorkgroupConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfiguration">AthenaWorkgroupConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">S3AclOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3AclOptionInput`<sup>Optional</sup> <a name="S3AclOptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```go
func S3AclOptionInput() *string
```

- *Type:* *string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```go
func S3AclOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```go
func ResetEncryptionOption()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```go
func EncryptionOptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---


### AthenaWorkgroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkgroupConfigurationResultConfigurationOutputReference" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/athenaworkgroup"

athenaworkgroup.NewAthenaWorkgroupConfigurationResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkgroupConfigurationResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration">PutAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">ResetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAclConfiguration` <a name="PutAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```go
func PutAclConfiguration(value AthenaWorkgroupConfigurationResultConfigurationAclConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `ResetAclConfiguration` <a name="ResetAclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```go
func ResetAclConfiguration()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">AclConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```go
func AclConfiguration() AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `AclConfigurationInput`<sup>Optional</sup> <a name="AclConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```go
func AclConfigurationInput() AthenaWorkgroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationAclConfiguration">AthenaWorkgroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```go
func OutputLocationInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AthenaWorkgroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.athenaWorkgroup.AthenaWorkgroupConfigurationResultConfiguration">AthenaWorkgroupConfigurationResultConfiguration</a>

---



