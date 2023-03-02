# `codestarconnectionsConnection` Submodule <a name="`codestarconnectionsConnection` Submodule" id="@cdktf/provider-aws.codestarconnectionsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsConnection <a name="CodestarconnectionsConnection" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection aws_codestarconnections_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarconnectionsconnection"

codestarconnectionsconnection.NewCodestarconnectionsConnection(scope Construct, id *string, config CodestarconnectionsConnectionConfig) CodestarconnectionsConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig">CodestarconnectionsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig">CodestarconnectionsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetHostArn">ResetHostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetProviderType">ResetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetHostArn` <a name="ResetHostArn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetHostArn"></a>

```go
func ResetHostArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderType` <a name="ResetProviderType" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetProviderType"></a>

```go
func ResetProviderType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarconnectionsconnection"

codestarconnectionsconnection.CodestarconnectionsConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarconnectionsconnection"

codestarconnectionsconnection.CodestarconnectionsConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarconnectionsconnection"

codestarconnectionsconnection.CodestarconnectionsConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.connectionStatus">ConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArnInput">HostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerTypeInput">ProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArn">HostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.connectionStatus"></a>

```go
func ConnectionStatus() *string
```

- *Type:* *string

---

##### `HostArnInput`<sup>Optional</sup> <a name="HostArnInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArnInput"></a>

```go
func HostArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerTypeInput"></a>

```go
func ProviderTypeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostArn`<sup>Required</sup> <a name="HostArn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.hostArn"></a>

```go
func HostArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsConnectionConfig <a name="CodestarconnectionsConnectionConfig" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarconnectionsconnection"

&codestarconnectionsconnection.CodestarconnectionsConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	HostArn: *string,
	Id: *string,
	ProviderType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#name CodestarconnectionsConnection#name}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.hostArn">HostArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#host_arn CodestarconnectionsConnection#host_arn}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#id CodestarconnectionsConnection#id}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.providerType">ProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#provider_type CodestarconnectionsConnection#provider_type}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#tags CodestarconnectionsConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#tags_all CodestarconnectionsConnection#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#name CodestarconnectionsConnection#name}.

---

##### `HostArn`<sup>Optional</sup> <a name="HostArn" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.hostArn"></a>

```go
HostArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#host_arn CodestarconnectionsConnection#host_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#id CodestarconnectionsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderType`<sup>Optional</sup> <a name="ProviderType" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.providerType"></a>

```go
ProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#provider_type CodestarconnectionsConnection#provider_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#tags CodestarconnectionsConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codestarconnectionsConnection.CodestarconnectionsConnectionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection#tags_all CodestarconnectionsConnection#tags_all}.

---



