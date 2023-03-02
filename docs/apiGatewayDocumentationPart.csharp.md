# `apiGatewayDocumentationPart` Submodule <a name="`apiGatewayDocumentationPart` Submodule" id="@cdktf/provider-aws.apiGatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationPart <a name="ApiGatewayDocumentationPart" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part aws_api_gateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDocumentationPart(Construct Scope, string Id, ApiGatewayDocumentationPartConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig">ApiGatewayDocumentationPartConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLocation` <a name="PutLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation"></a>

```csharp
private void PutLocation(ApiGatewayDocumentationPartLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDocumentationPart.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDocumentationPart.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApiGatewayDocumentationPart.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput">LocationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput">PropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties">Properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location"></a>

```csharp
public ApiGatewayDocumentationPartLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput"></a>

```csharp
public ApiGatewayDocumentationPartLocation LocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput"></a>

```csharp
public string PropertiesInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties"></a>

```csharp
public string Properties { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationPartConfig <a name="ApiGatewayDocumentationPartConfig" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDocumentationPartConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ApiGatewayDocumentationPartLocation Location,
    string Properties,
    string RestApiId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties">Properties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location"></a>

```csharp
public ApiGatewayDocumentationPartLocation Location { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties"></a>

```csharp
public string Properties { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayDocumentationPartLocation <a name="ApiGatewayDocumentationPartLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDocumentationPartLocation {
    string Type,
    string Method = null,
    string Name = null,
    string Path = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDocumentationPartLocationOutputReference <a name="ApiGatewayDocumentationPartLocationOutputReference" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApiGatewayDocumentationPartLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```csharp
public ApiGatewayDocumentationPartLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---



