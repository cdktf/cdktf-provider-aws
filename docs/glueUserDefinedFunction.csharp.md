# `glueUserDefinedFunction` Submodule <a name="`glueUserDefinedFunction` Submodule" id="@cdktf/provider-aws.glueUserDefinedFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueUserDefinedFunction <a name="GlueUserDefinedFunction" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function aws_glue_user_defined_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueUserDefinedFunction(Construct Scope, string Id, GlueUserDefinedFunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig">GlueUserDefinedFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris">PutResourceUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris">ResetResourceUris</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutResourceUris` <a name="PutResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris"></a>

```csharp
private void PutResourceUris(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.putResourceUris.parameter.value"></a>

- *Type:* object

---

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetCatalogId"></a>

```csharp
private void ResetCatalogId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceUris` <a name="ResetResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.resetResourceUris"></a>

```csharp
private void ResetResourceUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueUserDefinedFunction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueUserDefinedFunction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueUserDefinedFunction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris">ResourceUris</a></code> | <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput">CatalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput">OwnerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput">OwnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput">ResourceUrisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName">OwnerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType">OwnerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ResourceUris`<sup>Required</sup> <a name="ResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUris"></a>

```csharp
public GlueUserDefinedFunctionResourceUrisList ResourceUris { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList">GlueUserDefinedFunctionResourceUrisList</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogIdInput"></a>

```csharp
public string CatalogIdInput { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerNameInput`<sup>Optional</sup> <a name="OwnerNameInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerNameInput"></a>

```csharp
public string OwnerNameInput { get; }
```

- *Type:* string

---

##### `OwnerTypeInput`<sup>Optional</sup> <a name="OwnerTypeInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerTypeInput"></a>

```csharp
public string OwnerTypeInput { get; }
```

- *Type:* string

---

##### `ResourceUrisInput`<sup>Optional</sup> <a name="ResourceUrisInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.resourceUrisInput"></a>

```csharp
public object ResourceUrisInput { get; }
```

- *Type:* object

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerName"></a>

```csharp
public string OwnerName { get; }
```

- *Type:* string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.ownerType"></a>

```csharp
public string OwnerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueUserDefinedFunctionConfig <a name="GlueUserDefinedFunctionConfig" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueUserDefinedFunctionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClassName,
    string DatabaseName,
    string Name,
    string OwnerName,
    string OwnerType,
    string CatalogId = null,
    string Id = null,
    object ResourceUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className">ClassName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName">OwnerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType">OwnerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId">CatalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris">ResourceUris</a></code> | <code>object</code> | resource_uris block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#name GlueUserDefinedFunction#name}.

---

##### `OwnerName`<sup>Required</sup> <a name="OwnerName" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerName"></a>

```csharp
public string OwnerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}.

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.ownerType"></a>

```csharp
public string OwnerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.catalogId"></a>

```csharp
public string CatalogId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#id GlueUserDefinedFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceUris`<sup>Optional</sup> <a name="ResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionConfig.property.resourceUris"></a>

```csharp
public object ResourceUris { get; set; }
```

- *Type:* object

resource_uris block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}

---

### GlueUserDefinedFunctionResourceUris <a name="GlueUserDefinedFunctionResourceUris" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueUserDefinedFunctionResourceUris {
    string ResourceType,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUris.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function#uri GlueUserDefinedFunction#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueUserDefinedFunctionResourceUrisList <a name="GlueUserDefinedFunctionResourceUrisList" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueUserDefinedFunctionResourceUrisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get"></a>

```csharp
private GlueUserDefinedFunctionResourceUrisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueUserDefinedFunctionResourceUrisOutputReference <a name="GlueUserDefinedFunctionResourceUrisOutputReference" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueUserDefinedFunctionResourceUrisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueUserDefinedFunction.GlueUserDefinedFunctionResourceUrisOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



