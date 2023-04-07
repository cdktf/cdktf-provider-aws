# `dataAwsCodestarconnectionsConnection` Submodule <a name="`dataAwsCodestarconnectionsConnection` Submodule" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodestarconnectionsConnection <a name="DataAwsCodestarconnectionsConnection" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection aws_codestarconnections_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodestarconnectionsconnection"

dataawscodestarconnectionsconnection.NewDataAwsCodestarconnectionsConnection(scope Construct, id *string, config DataAwsCodestarconnectionsConnectionConfig) DataAwsCodestarconnectionsConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig">DataAwsCodestarconnectionsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig">DataAwsCodestarconnectionsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetArn"></a>

```go
func ResetArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodestarconnectionsconnection"

dataawscodestarconnectionsconnection.DataAwsCodestarconnectionsConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodestarconnectionsconnection"

dataawscodestarconnectionsconnection.DataAwsCodestarconnectionsConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodestarconnectionsconnection"

dataawscodestarconnectionsconnection.DataAwsCodestarconnectionsConnection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.connectionStatus">ConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.hostArn">HostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.connectionStatus"></a>

```go
func ConnectionStatus() *string
```

- *Type:* *string

---

##### `HostArn`<sup>Required</sup> <a name="HostArn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.hostArn"></a>

```go
func HostArn() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodestarconnectionsConnectionConfig <a name="DataAwsCodestarconnectionsConnectionConfig" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscodestarconnectionsconnection"

&dataawscodestarconnectionsconnection.DataAwsCodestarconnectionsConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	Id: *string,
	Name: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#arn DataAwsCodestarconnectionsConnection#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#id DataAwsCodestarconnectionsConnection#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#name DataAwsCodestarconnectionsConnection#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#tags DataAwsCodestarconnectionsConnection#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#arn DataAwsCodestarconnectionsConnection#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#id DataAwsCodestarconnectionsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#name DataAwsCodestarconnectionsConnection#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsCodestarconnectionsConnection.DataAwsCodestarconnectionsConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection#tags DataAwsCodestarconnectionsConnection#tags}.

---



