# `dataAwsConnectContactFlowModule` Submodule <a name="`dataAwsConnectContactFlowModule` Submodule" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectContactFlowModule <a name="DataAwsConnectContactFlowModule" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module aws_connect_contact_flow_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectcontactflowmodule"

dataawsconnectcontactflowmodule.NewDataAwsConnectContactFlowModule(scope Construct, id *string, config DataAwsConnectContactFlowModuleConfig) DataAwsConnectContactFlowModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig">DataAwsConnectContactFlowModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig">DataAwsConnectContactFlowModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetContactFlowModuleId">ResetContactFlowModuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContactFlowModuleId` <a name="ResetContactFlowModuleId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetContactFlowModuleId"></a>

```go
func ResetContactFlowModuleId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectcontactflowmodule"

dataawsconnectcontactflowmodule.DataAwsConnectContactFlowModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectcontactflowmodule"

dataawsconnectcontactflowmodule.DataAwsConnectContactFlowModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectcontactflowmodule"

dataawsconnectcontactflowmodule.DataAwsConnectContactFlowModule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.contactFlowModuleIdInput">ContactFlowModuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.contactFlowModuleId">ContactFlowModuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ContactFlowModuleIdInput`<sup>Optional</sup> <a name="ContactFlowModuleIdInput" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.contactFlowModuleIdInput"></a>

```go
func ContactFlowModuleIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContactFlowModuleId`<sup>Required</sup> <a name="ContactFlowModuleId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.contactFlowModuleId"></a>

```go
func ContactFlowModuleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectContactFlowModuleConfig <a name="DataAwsConnectContactFlowModuleConfig" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsconnectcontactflowmodule"

&dataawsconnectcontactflowmodule.DataAwsConnectContactFlowModuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	ContactFlowModuleId: *string,
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#instance_id DataAwsConnectContactFlowModule#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.contactFlowModuleId">ContactFlowModuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#contact_flow_module_id DataAwsConnectContactFlowModule#contact_flow_module_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#id DataAwsConnectContactFlowModule#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#name DataAwsConnectContactFlowModule#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#tags DataAwsConnectContactFlowModule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#instance_id DataAwsConnectContactFlowModule#instance_id}.

---

##### `ContactFlowModuleId`<sup>Optional</sup> <a name="ContactFlowModuleId" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.contactFlowModuleId"></a>

```go
ContactFlowModuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#contact_flow_module_id DataAwsConnectContactFlowModule#contact_flow_module_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#id DataAwsConnectContactFlowModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#name DataAwsConnectContactFlowModule#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsConnectContactFlowModule.DataAwsConnectContactFlowModuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_contact_flow_module#tags DataAwsConnectContactFlowModule#tags}.

---



