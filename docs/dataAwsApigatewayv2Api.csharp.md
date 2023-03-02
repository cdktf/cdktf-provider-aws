# `dataAwsApigatewayv2Api` Submodule <a name="`dataAwsApigatewayv2Api` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Api <a name="DataAwsApigatewayv2Api" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApigatewayv2Api(Construct Scope, string Id, DataAwsApigatewayv2ApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig">DataAwsApigatewayv2ApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig">DataAwsApigatewayv2ApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApigatewayv2Api.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApigatewayv2Api.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsApigatewayv2Api.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression">ApiKeySelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration">CorsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint">DisableExecuteApiEndpoint</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn">ExecutionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression">RouteSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `ApiKeySelectionExpression`<sup>Required</sup> <a name="ApiKeySelectionExpression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression"></a>

```csharp
public string ApiKeySelectionExpression { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CorsConfiguration`<sup>Required</sup> <a name="CorsConfiguration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration"></a>

```csharp
public DataAwsApigatewayv2ApiCorsConfigurationList CorsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableExecuteApiEndpoint`<sup>Required</sup> <a name="DisableExecuteApiEndpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```csharp
public IResolvable DisableExecuteApiEndpoint { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExecutionArn`<sup>Required</sup> <a name="ExecutionArn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn"></a>

```csharp
public string ExecutionArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `RouteSelectionExpression`<sup>Required</sup> <a name="RouteSelectionExpression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression"></a>

```csharp
public string RouteSelectionExpression { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ApiConfig <a name="DataAwsApigatewayv2ApiConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApigatewayv2ApiConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}.

---

### DataAwsApigatewayv2ApiCorsConfiguration <a name="DataAwsApigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApigatewayv2ApiCorsConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApigatewayv2ApiCorsConfigurationList <a name="DataAwsApigatewayv2ApiCorsConfigurationList" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApigatewayv2ApiCorsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get"></a>

```csharp
private DataAwsApigatewayv2ApiCorsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsApigatewayv2ApiCorsConfigurationOutputReference <a name="DataAwsApigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsApigatewayv2ApiCorsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">AllowHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">AllowMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">AllowOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```csharp
public IResolvable AllowCredentials { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AllowHeaders`<sup>Required</sup> <a name="AllowHeaders" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```csharp
public string[] AllowHeaders { get; }
```

- *Type:* string[]

---

##### `AllowMethods`<sup>Required</sup> <a name="AllowMethods" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```csharp
public string[] AllowMethods { get; }
```

- *Type:* string[]

---

##### `AllowOrigins`<sup>Required</sup> <a name="AllowOrigins" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```csharp
public string[] AllowOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsApigatewayv2ApiCorsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a>

---



