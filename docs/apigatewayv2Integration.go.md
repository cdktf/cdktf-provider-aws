# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktf/provider-aws.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration aws_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.NewApigatewayv2Integration(scope Construct, id *string, config Apigatewayv2IntegrationConfig) Apigatewayv2Integration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig">Apigatewayv2IntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">PutResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">ResetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">ResetCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">ResetIntegrationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">ResetIntegrationSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">ResetIntegrationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">ResetPassthroughBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">ResetPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">ResetRequestParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">ResetRequestTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">ResetTemplateSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds">ResetTimeoutMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutResponseParameters` <a name="PutResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```go
func PutResponseParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```go
func PutTlsConfig(value Apigatewayv2IntegrationTlsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```go
func ResetConnectionType()
```

##### `ResetContentHandlingStrategy` <a name="ResetContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```go
func ResetContentHandlingStrategy()
```

##### `ResetCredentialsArn` <a name="ResetCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```go
func ResetCredentialsArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationMethod` <a name="ResetIntegrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```go
func ResetIntegrationMethod()
```

##### `ResetIntegrationSubtype` <a name="ResetIntegrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```go
func ResetIntegrationSubtype()
```

##### `ResetIntegrationUri` <a name="ResetIntegrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```go
func ResetIntegrationUri()
```

##### `ResetPassthroughBehavior` <a name="ResetPassthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```go
func ResetPassthroughBehavior()
```

##### `ResetPayloadFormatVersion` <a name="ResetPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```go
func ResetPayloadFormatVersion()
```

##### `ResetRequestParameters` <a name="ResetRequestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```go
func ResetRequestParameters()
```

##### `ResetRequestTemplates` <a name="ResetRequestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```go
func ResetRequestTemplates()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```go
func ResetResponseParameters()
```

##### `ResetTemplateSelectionExpression` <a name="ResetTemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```go
func ResetTemplateSelectionExpression()
```

##### `ResetTimeoutMilliseconds` <a name="ResetTimeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds"></a>

```go
func ResetTimeoutMilliseconds()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```go
func ResetTlsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.Apigatewayv2Integration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.Apigatewayv2Integration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.Apigatewayv2Integration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression">IntegrationResponseSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">ResponseParameters</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">ContentHandlingStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">CredentialsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">IntegrationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">IntegrationSubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">IntegrationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">PassthroughBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">PayloadFormatVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">RequestParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">RequestTemplatesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">ResponseParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">TemplateSelectionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput">TimeoutMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">CredentialsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">IntegrationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">IntegrationSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">IntegrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">IntegrationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">PayloadFormatVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">RequestParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">RequestTemplates</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationResponseSelectionExpression`<sup>Required</sup> <a name="IntegrationResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression"></a>

```go
func IntegrationResponseSelectionExpression() *string
```

- *Type:* *string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```go
func ResponseParameters() Apigatewayv2IntegrationResponseParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```go
func TlsConfig() Apigatewayv2IntegrationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategyInput`<sup>Optional</sup> <a name="ContentHandlingStrategyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```go
func ContentHandlingStrategyInput() *string
```

- *Type:* *string

---

##### `CredentialsArnInput`<sup>Optional</sup> <a name="CredentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```go
func CredentialsArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationMethodInput`<sup>Optional</sup> <a name="IntegrationMethodInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```go
func IntegrationMethodInput() *string
```

- *Type:* *string

---

##### `IntegrationSubtypeInput`<sup>Optional</sup> <a name="IntegrationSubtypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```go
func IntegrationSubtypeInput() *string
```

- *Type:* *string

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```go
func IntegrationTypeInput() *string
```

- *Type:* *string

---

##### `IntegrationUriInput`<sup>Optional</sup> <a name="IntegrationUriInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```go
func IntegrationUriInput() *string
```

- *Type:* *string

---

##### `PassthroughBehaviorInput`<sup>Optional</sup> <a name="PassthroughBehaviorInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```go
func PassthroughBehaviorInput() *string
```

- *Type:* *string

---

##### `PayloadFormatVersionInput`<sup>Optional</sup> <a name="PayloadFormatVersionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```go
func PayloadFormatVersionInput() *string
```

- *Type:* *string

---

##### `RequestParametersInput`<sup>Optional</sup> <a name="RequestParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```go
func RequestParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTemplatesInput`<sup>Optional</sup> <a name="RequestTemplatesInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```go
func RequestTemplatesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```go
func ResponseParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateSelectionExpressionInput`<sup>Optional</sup> <a name="TemplateSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```go
func TemplateSelectionExpressionInput() *string
```

- *Type:* *string

---

##### `TimeoutMillisecondsInput`<sup>Optional</sup> <a name="TimeoutMillisecondsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput"></a>

```go
func TimeoutMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```go
func TlsConfigInput() Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ContentHandlingStrategy`<sup>Required</sup> <a name="ContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```go
func ContentHandlingStrategy() *string
```

- *Type:* *string

---

##### `CredentialsArn`<sup>Required</sup> <a name="CredentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```go
func CredentialsArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationMethod`<sup>Required</sup> <a name="IntegrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```go
func IntegrationMethod() *string
```

- *Type:* *string

---

##### `IntegrationSubtype`<sup>Required</sup> <a name="IntegrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```go
func IntegrationSubtype() *string
```

- *Type:* *string

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```go
func IntegrationType() *string
```

- *Type:* *string

---

##### `IntegrationUri`<sup>Required</sup> <a name="IntegrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```go
func IntegrationUri() *string
```

- *Type:* *string

---

##### `PassthroughBehavior`<sup>Required</sup> <a name="PassthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```go
func PassthroughBehavior() *string
```

- *Type:* *string

---

##### `PayloadFormatVersion`<sup>Required</sup> <a name="PayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```go
func PayloadFormatVersion() *string
```

- *Type:* *string

---

##### `RequestParameters`<sup>Required</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```go
func RequestParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestTemplates`<sup>Required</sup> <a name="RequestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```go
func RequestTemplates() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TemplateSelectionExpression`<sup>Required</sup> <a name="TemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```go
func TemplateSelectionExpression() *string
```

- *Type:* *string

---

##### `TimeoutMilliseconds`<sup>Required</sup> <a name="TimeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds"></a>

```go
func TimeoutMilliseconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

&apigatewayv2integration.Apigatewayv2IntegrationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApiId: *string,
	IntegrationType: *string,
	ConnectionId: *string,
	ConnectionType: *string,
	ContentHandlingStrategy: *string,
	CredentialsArn: *string,
	Description: *string,
	Id: *string,
	IntegrationMethod: *string,
	IntegrationSubtype: *string,
	IntegrationUri: *string,
	PassthroughBehavior: *string,
	PayloadFormatVersion: *string,
	RequestParameters: *map[string]*string,
	RequestTemplates: *map[string]*string,
	ResponseParameters: interface{},
	TemplateSelectionExpression: *string,
	TimeoutMilliseconds: *f64,
	TlsConfig: github.com/cdktf/cdktf-provider-aws-go/aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">IntegrationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">ContentHandlingStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">CredentialsArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">IntegrationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">IntegrationSubtype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">IntegrationUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">PassthroughBehavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">PayloadFormatVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">RequestParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">RequestTemplates</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">ResponseParameters</a></code> | <code>interface{}</code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">TemplateSelectionExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds">TimeoutMilliseconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```go
IntegrationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `ContentHandlingStrategy`<sup>Optional</sup> <a name="ContentHandlingStrategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```go
ContentHandlingStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `CredentialsArn`<sup>Optional</sup> <a name="CredentialsArn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```go
CredentialsArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationMethod`<sup>Optional</sup> <a name="IntegrationMethod" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```go
IntegrationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `IntegrationSubtype`<sup>Optional</sup> <a name="IntegrationSubtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```go
IntegrationSubtype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `IntegrationUri`<sup>Optional</sup> <a name="IntegrationUri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```go
IntegrationUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `PassthroughBehavior`<sup>Optional</sup> <a name="PassthroughBehavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```go
PassthroughBehavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `PayloadFormatVersion`<sup>Optional</sup> <a name="PayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```go
PayloadFormatVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `RequestParameters`<sup>Optional</sup> <a name="RequestParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```go
RequestParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `RequestTemplates`<sup>Optional</sup> <a name="RequestTemplates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```go
RequestTemplates *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```go
ResponseParameters interface{}
```

- *Type:* interface{}

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `TemplateSelectionExpression`<sup>Optional</sup> <a name="TemplateSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```go
TemplateSelectionExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `TimeoutMilliseconds`<sup>Optional</sup> <a name="TimeoutMilliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds"></a>

```go
TimeoutMilliseconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```go
TlsConfig Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

&apigatewayv2integration.Apigatewayv2IntegrationResponseParameters {
	Mappings: *map[string]*string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings">Mappings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}. |

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings"></a>

```go
Mappings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}.

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

&apigatewayv2integration.Apigatewayv2IntegrationTlsConfig {
	ServerNameToVerify: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">ServerNameToVerify</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `ServerNameToVerify`<sup>Optional</sup> <a name="ServerNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```go
ServerNameToVerify *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersList" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.NewApigatewayv2IntegrationResponseParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2IntegrationResponseParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get"></a>

```go
func Get(index *f64) Apigatewayv2IntegrationResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.NewApigatewayv2IntegrationResponseParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2IntegrationResponseParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput">MappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings">Mappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput"></a>

```go
func MappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings"></a>

```go
func Mappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/apigatewayv2integration"

apigatewayv2integration.NewApigatewayv2IntegrationTlsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2IntegrationTlsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">ResetServerNameToVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerNameToVerify` <a name="ResetServerNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```go
func ResetServerNameToVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">ServerNameToVerifyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">ServerNameToVerify</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerNameToVerifyInput`<sup>Optional</sup> <a name="ServerNameToVerifyInput" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```go
func ServerNameToVerifyInput() *string
```

- *Type:* *string

---

##### `ServerNameToVerify`<sup>Required</sup> <a name="ServerNameToVerify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```go
func ServerNameToVerify() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



