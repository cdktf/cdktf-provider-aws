# `connectLambdaFunctionAssociation` Submodule <a name="`connectLambdaFunctionAssociation` Submodule" id="@cdktf/provider-aws.connectLambdaFunctionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectLambdaFunctionAssociation <a name="ConnectLambdaFunctionAssociation" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association aws_connect_lambda_function_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectlambdafunctionassociation"

connectlambdafunctionassociation.NewConnectLambdaFunctionAssociation(scope Construct, id *string, config ConnectLambdaFunctionAssociationConfig) ConnectLambdaFunctionAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig">ConnectLambdaFunctionAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig">ConnectLambdaFunctionAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectlambdafunctionassociation"

connectlambdafunctionassociation.ConnectLambdaFunctionAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectlambdafunctionassociation"

connectlambdafunctionassociation.ConnectLambdaFunctionAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectlambdafunctionassociation"

connectlambdafunctionassociation.ConnectLambdaFunctionAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.functionArnInput">FunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionArnInput`<sup>Optional</sup> <a name="FunctionArnInput" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.functionArnInput"></a>

```go
func FunctionArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectLambdaFunctionAssociationConfig <a name="ConnectLambdaFunctionAssociationConfig" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/connectlambdafunctionassociation"

&connectlambdafunctionassociation.ConnectLambdaFunctionAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FunctionArn: *string,
	InstanceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.functionArn">FunctionArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#function_arn ConnectLambdaFunctionAssociation#function_arn}. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#instance_id ConnectLambdaFunctionAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#id ConnectLambdaFunctionAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.functionArn"></a>

```go
FunctionArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#function_arn ConnectLambdaFunctionAssociation#function_arn}.

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#instance_id ConnectLambdaFunctionAssociation#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.connectLambdaFunctionAssociation.ConnectLambdaFunctionAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_lambda_function_association#id ConnectLambdaFunctionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



