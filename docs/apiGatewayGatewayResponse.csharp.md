# `apiGatewayGatewayResponse` Submodule <a name="`apiGatewayGatewayResponse` Submodule" id="@cdktf/provider-aws.apiGatewayGatewayResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayGatewayResponse <a name="ApiGatewayGatewayResponse" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response aws_api_gateway_gateway_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayGatewayResponse(Construct Scope, string Id, ApiGatewayGatewayResponseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig">ApiGatewayGatewayResponseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig">ApiGatewayGatewayResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters">ResetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates">ResetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResponseParameters` <a name="ResetResponseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters"></a>

```csharp
private void ResetResponseParameters()
```

##### `ResetResponseTemplates` <a name="ResetResponseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates"></a>

```csharp
private void ResetResponseTemplates()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayGatewayResponse.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayGatewayResponse.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayGatewayResponse.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput">ResponseParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput">ResponseTemplatesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput">ResponseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType">ResponseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResponseParametersInput`<sup>Optional</sup> <a name="ResponseParametersInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplatesInput`<sup>Optional</sup> <a name="ResponseTemplatesInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplatesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTypeInput`<sup>Optional</sup> <a name="ResponseTypeInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput"></a>

```csharp
public string ResponseTypeInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResponseParameters`<sup>Required</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseTemplates`<sup>Required</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType"></a>

```csharp
public string ResponseType { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayGatewayResponseConfig <a name="ApiGatewayGatewayResponseConfig" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayGatewayResponseConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ResponseType,
    string RestApiId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> ResponseParameters = null,
    System.Collections.Generic.IDictionary<string, string> ResponseTemplates = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType">ResponseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters">ResponseParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates">ResponseTemplates</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType"></a>

```csharp
public string ResponseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResponseParameters`<sup>Optional</sup> <a name="ResponseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}.

---

##### `ResponseTemplates`<sup>Optional</sup> <a name="ResponseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResponseTemplates { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}.

---



