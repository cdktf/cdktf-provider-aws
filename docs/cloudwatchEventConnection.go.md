# `cloudwatchEventConnection` Submodule <a name="`cloudwatchEventConnection` Submodule" id="@cdktf/provider-aws.cloudwatchEventConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventConnection <a name="CloudwatchEventConnection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection aws_cloudwatch_event_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnection(scope Construct, id *string, config CloudwatchEventConnectionConfig) CloudwatchEventConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig">CloudwatchEventConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig">CloudwatchEventConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters">PutAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuthParameters` <a name="PutAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters"></a>

```go
func PutAuthParameters(value CloudwatchEventConnectionAuthParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.CloudwatchEventConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.CloudwatchEventConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.CloudwatchEventConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput">AuthParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthParameters`<sup>Required</sup> <a name="AuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters"></a>

```go
func AuthParameters() CloudwatchEventConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `AuthParametersInput`<sup>Optional</sup> <a name="AuthParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput"></a>

```go
func AuthParametersInput() CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventConnectionAuthParameters <a name="CloudwatchEventConnectionAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParameters {
	ApiKey: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey,
	Basic: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic,
	InvocationHttpParameters: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters,
	Oauth: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | invocation_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth">Oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | oauth block. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey"></a>

```go
ApiKey CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic"></a>

```go
Basic CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}

---

##### `InvocationHttpParameters`<sup>Optional</sup> <a name="InvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters"></a>

```go
InvocationHttpParameters CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

invocation_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}

---

##### `Oauth`<sup>Optional</sup> <a name="Oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth"></a>

```go
Oauth CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}

---

### CloudwatchEventConnectionAuthParametersApiKey <a name="CloudwatchEventConnectionAuthParametersApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersApiKey {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersBasic <a name="CloudwatchEventConnectionAuthParametersBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersBasic {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParameters <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
	Body: interface{},
	Header: interface{},
	QueryString: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body">Body</a></code> | <code>interface{}</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body"></a>

```go
Body interface{}
```

- *Type:* interface{}

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauth <a name="CloudwatchEventConnectionAuthParametersOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauth {
	AuthorizationEndpoint: *string,
	HttpMethod: *string,
	OauthHttpParameters: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters,
	ClientParameters: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters">OauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | oauth_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | client_parameters block. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}.

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}.

---

##### `OauthHttpParameters`<sup>Required</sup> <a name="OauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters"></a>

```go
OauthHttpParameters CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

oauth_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}

---

##### `ClientParameters`<sup>Optional</sup> <a name="ClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters"></a>

```go
ClientParameters CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

client_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}

---

### CloudwatchEventConnectionAuthParametersOauthClientParameters <a name="CloudwatchEventConnectionAuthParametersOauthClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauthClientParameters {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
	Body: interface{},
	Header: interface{},
	QueryString: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body">Body</a></code> | <code>interface{}</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body"></a>

```go
Body interface{}
```

- *Type:* interface{}

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionConfig <a name="CloudwatchEventConnectionConfig" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

&cloudwatcheventconnection.CloudwatchEventConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizationType: *string,
	AuthParameters: github.com/cdktf/cdktf-provider-aws-go/aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters,
	Name: *string,
	Description: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `AuthParameters`<sup>Required</sup> <a name="AuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters"></a>

```go
AuthParameters CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventConnectionAuthParametersApiKeyOutputReference <a name="CloudwatchEventConnectionAuthParametersApiKeyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersApiKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersApiKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---


### CloudwatchEventConnectionAuthParametersBasicOutputReference <a name="CloudwatchEventConnectionAuthParametersBasicOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody"></a>

```go
func PutBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body">Body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body"></a>

```go
func Body() CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header"></a>

```go
func Header() CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString"></a>

```go
func QueryString() CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody"></a>

```go
func PutBody(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body">Body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body"></a>

```go
func Body() CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header"></a>

```go
func Header() CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString"></a>

```go
func QueryString() CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get"></a>

```go
func Get(index *f64) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchEventConnectionAuthParametersOauthOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOauthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersOauthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters">PutClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters">PutOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters">ResetClientParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientParameters` <a name="PutClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters"></a>

```go
func PutClientParameters(value CloudwatchEventConnectionAuthParametersOauthClientParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `PutOauthHttpParameters` <a name="PutOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters"></a>

```go
func PutOauthHttpParameters(value CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `ResetClientParameters` <a name="ResetClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters"></a>

```go
func ResetClientParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters">OauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput">ClientParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput">OauthHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientParameters`<sup>Required</sup> <a name="ClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters"></a>

```go
func ClientParameters() CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a>

---

##### `OauthHttpParameters`<sup>Required</sup> <a name="OauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters"></a>

```go
func OauthHttpParameters() CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a>

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientParametersInput`<sup>Optional</sup> <a name="ClientParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput"></a>

```go
func ClientParametersInput() CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OauthHttpParametersInput`<sup>Optional</sup> <a name="OauthHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput"></a>

```go
func OauthHttpParametersInput() CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---


### CloudwatchEventConnectionAuthParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudwatcheventconnection"

cloudwatcheventconnection.NewCloudwatchEventConnectionAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudwatchEventConnectionAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters">PutInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth">PutOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters">ResetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth">ResetOauth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey"></a>

```go
func PutApiKey(value CloudwatchEventConnectionAuthParametersApiKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic"></a>

```go
func PutBasic(value CloudwatchEventConnectionAuthParametersBasic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `PutInvocationHttpParameters` <a name="PutInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```go
func PutInvocationHttpParameters(value CloudwatchEventConnectionAuthParametersInvocationHttpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `PutOauth` <a name="PutOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth"></a>

```go
func PutOauth(value CloudwatchEventConnectionAuthParametersOauth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey"></a>

```go
func ResetApiKey()
```

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic"></a>

```go
func ResetBasic()
```

##### `ResetInvocationHttpParameters` <a name="ResetInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```go
func ResetInvocationHttpParameters()
```

##### `ResetOauth` <a name="ResetOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth"></a>

```go
func ResetOauth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth">Oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">InvocationHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput">OauthInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey"></a>

```go
func ApiKey() CloudwatchEventConnectionAuthParametersApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a>

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic"></a>

```go
func Basic() CloudwatchEventConnectionAuthParametersBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a>

---

##### `InvocationHttpParameters`<sup>Required</sup> <a name="InvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```go
func InvocationHttpParameters() CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `Oauth`<sup>Required</sup> <a name="Oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth"></a>

```go
func Oauth() CloudwatchEventConnectionAuthParametersOauthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput"></a>

```go
func ApiKeyInput() CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput"></a>

```go
func BasicInput() CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `InvocationHttpParametersInput`<sup>Optional</sup> <a name="InvocationHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```go
func InvocationHttpParametersInput() CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `OauthInput`<sup>Optional</sup> <a name="OauthInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput"></a>

```go
func OauthInput() CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---



