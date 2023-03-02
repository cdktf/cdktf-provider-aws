# `dataAwsServicecatalogLaunchPaths` Submodule <a name="`dataAwsServicecatalogLaunchPaths` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogLaunchPaths <a name="DataAwsServicecatalogLaunchPaths" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths aws_servicecatalog_launch_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPaths(Construct Scope, string Id, DataAwsServicecatalogLaunchPathsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig">DataAwsServicecatalogLaunchPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsServicecatalogLaunchPathsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetAcceptLanguage"></a>

```csharp
private void ResetAcceptLanguage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicecatalogLaunchPaths.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicecatalogLaunchPaths.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsServicecatalogLaunchPaths.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries">Summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Summaries`<sup>Required</sup> <a name="Summaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.summaries"></a>

```csharp
public DataAwsServicecatalogLaunchPathsSummariesList Summaries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList">DataAwsServicecatalogLaunchPathsSummariesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeouts"></a>

```csharp
public DataAwsServicecatalogLaunchPathsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference">DataAwsServicecatalogLaunchPathsTimeoutsOutputReference</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguageInput"></a>

```csharp
public string AcceptLanguageInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPaths.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogLaunchPathsConfig <a name="DataAwsServicecatalogLaunchPathsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProductId,
    string AcceptLanguage = null,
    string Id = null,
    DataAwsServicecatalogLaunchPathsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#product_id DataAwsServicecatalogLaunchPaths#product_id}.

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.acceptLanguage"></a>

```csharp
public string AcceptLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#accept_language DataAwsServicecatalogLaunchPaths#accept_language}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#id DataAwsServicecatalogLaunchPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsConfig.property.timeouts"></a>

```csharp
public DataAwsServicecatalogLaunchPathsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts">DataAwsServicecatalogLaunchPathsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#timeouts DataAwsServicecatalogLaunchPaths#timeouts}

---

### DataAwsServicecatalogLaunchPathsSummaries <a name="DataAwsServicecatalogLaunchPathsSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummaries {

};
```


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries {

};
```


### DataAwsServicecatalogLaunchPathsTimeouts <a name="DataAwsServicecatalogLaunchPathsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_launch_paths#read DataAwsServicecatalogLaunchPaths#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get"></a>

```csharp
private DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries">DataAwsServicecatalogLaunchPathsSummariesConstraintSummaries</a>

---


### DataAwsServicecatalogLaunchPathsSummariesList <a name="DataAwsServicecatalogLaunchPathsSummariesList" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get"></a>

```csharp
private DataAwsServicecatalogLaunchPathsSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsServicecatalogLaunchPathsSummariesOutputReference <a name="DataAwsServicecatalogLaunchPathsSummariesOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries">ConstraintSummaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId">PathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstraintSummaries`<sup>Required</sup> <a name="ConstraintSummaries" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.constraintSummaries"></a>

```csharp
public DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList ConstraintSummaries { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList">DataAwsServicecatalogLaunchPathsSummariesConstraintSummariesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.pathId"></a>

```csharp
public string PathId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsServicecatalogLaunchPathsSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsSummaries">DataAwsServicecatalogLaunchPathsSummaries</a>

---


### DataAwsServicecatalogLaunchPathsTimeoutsOutputReference <a name="DataAwsServicecatalogLaunchPathsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsServicecatalogLaunchPathsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsServicecatalogLaunchPaths.DataAwsServicecatalogLaunchPathsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



