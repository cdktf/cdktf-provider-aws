# `servicecatalogServiceAction` Submodule <a name="`servicecatalogServiceAction` Submodule" id="@cdktf/provider-aws.servicecatalogServiceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogServiceAction <a name="ServicecatalogServiceAction" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action aws_servicecatalog_service_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.NewServicecatalogServiceAction(scope Construct, id *string, config ServicecatalogServiceActionConfig) ServicecatalogServiceAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig">ServicecatalogServiceActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig">ServicecatalogServiceActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition"></a>

```go
func PutDefinition(value ServicecatalogServiceActionDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts"></a>

```go
func PutTimeouts(value ServicecatalogServiceActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.ServicecatalogServiceAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.ServicecatalogServiceAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.ServicecatalogServiceAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput">DefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition"></a>

```go
func Definition() ServicecatalogServiceActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts"></a>

```go
func Timeouts() ServicecatalogServiceActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput"></a>

```go
func DefinitionInput() ServicecatalogServiceActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogServiceActionConfig <a name="ServicecatalogServiceActionConfig" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

&servicecatalogserviceaction.ServicecatalogServiceActionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition,
	Name: *string,
	AcceptLanguage: *string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition"></a>

```go
Definition ServicecatalogServiceActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts"></a>

```go
Timeouts ServicecatalogServiceActionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#timeouts ServicecatalogServiceAction#timeouts}

---

### ServicecatalogServiceActionDefinition <a name="ServicecatalogServiceActionDefinition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

&servicecatalogserviceaction.ServicecatalogServiceActionDefinition {
	Name: *string,
	Version: *string,
	AssumeRole: *string,
	Parameters: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#version ServicecatalogServiceAction#version}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole">AssumeRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#type ServicecatalogServiceAction#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#version ServicecatalogServiceAction#version}.

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole"></a>

```go
AssumeRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#type ServicecatalogServiceAction#type}.

---

### ServicecatalogServiceActionTimeouts <a name="ServicecatalogServiceActionTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

&servicecatalogserviceaction.ServicecatalogServiceActionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#create ServicecatalogServiceAction#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#read ServicecatalogServiceAction#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#update ServicecatalogServiceAction#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#create ServicecatalogServiceAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#read ServicecatalogServiceAction#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#update ServicecatalogServiceAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogServiceActionDefinitionOutputReference <a name="ServicecatalogServiceActionDefinitionOutputReference" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.NewServicecatalogServiceActionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogServiceActionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole"></a>

```go
func ResetAssumeRole()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput">AssumeRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole">AssumeRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput"></a>

```go
func AssumeRoleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole"></a>

```go
func AssumeRole() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicecatalogServiceActionDefinition
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---


### ServicecatalogServiceActionTimeoutsOutputReference <a name="ServicecatalogServiceActionTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/servicecatalogserviceaction"

servicecatalogserviceaction.NewServicecatalogServiceActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogServiceActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



