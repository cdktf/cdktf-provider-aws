# `apigatewayv2IntegrationResponse` Submodule <a name="`apigatewayv2IntegrationResponse` Submodule" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2IntegrationResponse <a name="Apigatewayv2IntegrationResponse" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response aws_apigatewayv2_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integrationresponse"

apigatewayv2integrationresponse.NewApigatewayv2IntegrationResponse(scope Construct, id *string, config Apigatewayv2IntegrationResponseConfig) Apigatewayv2IntegrationResponse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig">Apigatewayv2IntegrationResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig">Apigatewayv2IntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy">ResetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates">ResetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression">ResetTemplateSelectionExpression</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContentHandlingStrategy` <a name="ResetContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy"></a>

```go
func ResetContentHandlingStrategy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId"></a>

```go
func ResetId()
```

##### `ResetResponseTemplates` <a name="ResetResponseTemplates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates"></a>

```go
func ResetResponseTemplates()
```

##### `ResetTemplateSelectionExpression` <a name="ResetTemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression"></a>

```go
func ResetTemplateSelectionExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integrationresponse"

apigatewayv2integrationresponse.Apigatewayv2IntegrationResponse_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integrationresponse"

apigatewayv2integrationresponse.Apigatewayv2IntegrationResponse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integrationresponse"

apigatewayv2integrationresponse.Apigatewayv2IntegrationResponse_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput">ContentHandlingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput">IntegrationResponseKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput">ResponseTemplatesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput">TemplateSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey">IntegrationResponseKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates">ResponseTemplates</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategyInput`<sup>Optional</sup> <a name="ContentHandlingStrategyInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput"></a>

```go
func ContentHandlingStrategyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `IntegrationResponseKeyInput`<sup>Optional</sup> <a name="IntegrationResponseKeyInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput"></a>

```go
func IntegrationResponseKeyInput() *string
```

- *Type:* *string

---

##### `ResponseTemplatesInput`<sup>Optional</sup> <a name="ResponseTemplatesInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput"></a>

```go
func ResponseTemplatesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateSelectionExpressionInput`<sup>Optional</sup> <a name="TemplateSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput"></a>

```go
func TemplateSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategy`<sup>Required</sup> <a name="ContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy"></a>

```go
func ContentHandlingStrategy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `IntegrationResponseKey`<sup>Required</sup> <a name="IntegrationResponseKey" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey"></a>

```go
func IntegrationResponseKey() *string
```

- *Type:* *string

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates"></a>

```go
func ResponseTemplates() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateSelectionExpression`<sup>Required</sup> <a name="TemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression"></a>

```go
func TemplateSelectionExpression() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationResponseConfig <a name="Apigatewayv2IntegrationResponseConfig" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integrationresponse"

&apigatewayv2integrationresponse.Apigatewayv2IntegrationResponseConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	IntegrationId: *string,
	IntegrationResponseKey: *string,
	ContentHandlingStrategy: *string,
	Id: *string,
	ResponseTemplates: *map[string]*string,
	TemplateSelectionExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey">IntegrationResponseKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates">ResponseTemplates</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `IntegrationResponseKey`<sup>Required</sup> <a name="IntegrationResponseKey" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey"></a>

```go
IntegrationResponseKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `ContentHandlingStrategy`<sup>Optional</sup> <a name="ContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy"></a>

```go
ContentHandlingStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResponseTemplates`<sup>Optional</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates"></a>

```go
ResponseTemplates *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `TemplateSelectionExpression`<sup>Optional</sup> <a name="TemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression"></a>

```go
TemplateSelectionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---



