# `apiGatewayIntegrationResponse` Submodule <a name="`apiGatewayIntegrationResponse` Submodule" id="@cdktf/provider-aws.apiGatewayIntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegrationResponse <a name="ApiGatewayIntegrationResponse" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response aws_api_gateway_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegrationResponse(Construct Scope, string Id, ApiGatewayIntegrationResponseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig">ApiGatewayIntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling">ResetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates">ResetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern">ResetSelectionPattern</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContentHandling` <a name="ResetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling"></a>

```csharp
private void ResetContentHandling()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters"></a>

```csharp
private void ResetResponseParameters()
```

##### `ResetResponseTemplates` <a name="ResetResponseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates"></a>

```csharp
private void ResetResponseTemplates()
```

##### `ResetSelectionPattern` <a name="ResetSelectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern"></a>

```csharp
private void ResetSelectionPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegrationResponse.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegrationResponse.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayIntegrationResponse.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput">ContentHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput">ResponseParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput">ResponseTemplatesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput">SelectionPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling">ContentHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern">SelectionPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentHandlingInput`<sup>Optional</sup> <a name="ContentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput"></a>

```csharp
public string ContentHandlingInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplatesInput`<sup>Optional</sup> <a name="ResponseTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplatesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `SelectionPatternInput`<sup>Optional</sup> <a name="SelectionPatternInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput"></a>

```csharp
public string SelectionPatternInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `ContentHandling`<sup>Required</sup> <a name="ContentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling"></a>

```csharp
public string ContentHandling { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `SelectionPattern`<sup>Required</sup> <a name="SelectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern"></a>

```csharp
public string SelectionPattern { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationResponseConfig <a name="ApiGatewayIntegrationResponseConfig" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayIntegrationResponseConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HttpMethod,
    string ResourceId,
    string RestApiId,
    string StatusCode,
    string ContentHandling = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> ResponseParameters = null,
    System.Collections.Generic.IDictionary<string, string> ResponseTemplates = null,
    string SelectionPattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling">ContentHandling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern">SelectionPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}.

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}.

---

##### `ContentHandling`<sup>Optional</sup> <a name="ContentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling"></a>

```csharp
public string ContentHandling { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}.

---

##### `ResponseTemplates`<sup>Optional</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}.

---

##### `SelectionPattern`<sup>Optional</sup> <a name="SelectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern"></a>

```csharp
public string SelectionPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}.

---



