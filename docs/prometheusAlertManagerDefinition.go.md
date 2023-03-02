# `prometheusAlertManagerDefinition` Submodule <a name="`prometheusAlertManagerDefinition` Submodule" id="@cdktf/provider-aws.prometheusAlertManagerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusAlertManagerDefinition <a name="PrometheusAlertManagerDefinition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition aws_prometheus_alert_manager_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/prometheusalertmanagerdefinition"

prometheusalertmanagerdefinition.NewPrometheusAlertManagerDefinition(scope Construct, id *string, config PrometheusAlertManagerDefinitionConfig) PrometheusAlertManagerDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig">PrometheusAlertManagerDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig">PrometheusAlertManagerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/prometheusalertmanagerdefinition"

prometheusalertmanagerdefinition.PrometheusAlertManagerDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/prometheusalertmanagerdefinition"

prometheusalertmanagerdefinition.PrometheusAlertManagerDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/prometheusalertmanagerdefinition"

prometheusalertmanagerdefinition.PrometheusAlertManagerDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusAlertManagerDefinitionConfig <a name="PrometheusAlertManagerDefinitionConfig" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/prometheusalertmanagerdefinition"

&prometheusalertmanagerdefinition.PrometheusAlertManagerDefinitionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: *string,
	WorkspaceId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



