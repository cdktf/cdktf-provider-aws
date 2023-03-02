# `chimeVoiceConnectorGroup` Submodule <a name="`chimeVoiceConnectorGroup` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorGroup <a name="ChimeVoiceConnectorGroup" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group aws_chime_voice_connector_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.NewChimeVoiceConnectorGroup(scope Construct, id *string, config ChimeVoiceConnectorGroupConfig) ChimeVoiceConnectorGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector">PutConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector">ResetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConnector` <a name="PutConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector"></a>

```go
func PutConnector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnector` <a name="ResetConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector"></a>

```go
func ResetConnector()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.ChimeVoiceConnectorGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.ChimeVoiceConnectorGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.ChimeVoiceConnectorGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector">Connector</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput">ConnectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector"></a>

```go
func Connector() ChimeVoiceConnectorGroupConnectorList
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a>

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput"></a>

```go
func ConnectorInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorGroupConfig <a name="ChimeVoiceConnectorGroupConfig" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

&chimevoiceconnectorgroup.ChimeVoiceConnectorGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Connector: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector">Connector</a></code> | <code>interface{}</code> | connector block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}.

---

##### `Connector`<sup>Optional</sup> <a name="Connector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector"></a>

```go
Connector interface{}
```

- *Type:* interface{}

connector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorGroupConnector <a name="ChimeVoiceConnectorGroupConnector" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

&chimevoiceconnectorgroup.ChimeVoiceConnectorGroupConnector {
	Priority: *f64,
	VoiceConnectorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}. |

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}.

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId"></a>

```go
VoiceConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorGroupConnectorList <a name="ChimeVoiceConnectorGroupConnectorList" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.NewChimeVoiceConnectorGroupConnectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeVoiceConnectorGroupConnectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get"></a>

```go
func Get(index *f64) ChimeVoiceConnectorGroupConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeVoiceConnectorGroupConnectorOutputReference <a name="ChimeVoiceConnectorGroupConnectorOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/chimevoiceconnectorgroup"

chimevoiceconnectorgroup.NewChimeVoiceConnectorGroupConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeVoiceConnectorGroupConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput">VoiceConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId">VoiceConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `VoiceConnectorIdInput`<sup>Optional</sup> <a name="VoiceConnectorIdInput" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput"></a>

```go
func VoiceConnectorIdInput() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `VoiceConnectorId`<sup>Required</sup> <a name="VoiceConnectorId" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId"></a>

```go
func VoiceConnectorId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



