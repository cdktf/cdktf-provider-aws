# `dataAwsDynamodbTableItem` Submodule <a name="`dataAwsDynamodbTableItem` Submodule" id="@cdktf/provider-aws.dataAwsDynamodbTableItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbTableItem <a name="DataAwsDynamodbTableItem" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item aws_dynamodb_table_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDynamodbTableItem(Construct Scope, string Id, DataAwsDynamodbTableItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig">DataAwsDynamodbTableItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig">DataAwsDynamodbTableItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames">ResetExpressionAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression">ResetProjectionExpression</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExpressionAttributeNames` <a name="ResetExpressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames"></a>

```csharp
private void ResetExpressionAttributeNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProjectionExpression` <a name="ResetProjectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression"></a>

```csharp
private void ResetProjectionExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDynamodbTableItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDynamodbTableItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsDynamodbTableItem.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item">Item</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput">ExpressionAttributeNamesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput">ProjectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames">ExpressionAttributeNames</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression">ProjectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Item`<sup>Required</sup> <a name="Item" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item"></a>

```csharp
public string Item { get; }
```

- *Type:* string

---

##### `ExpressionAttributeNamesInput`<sup>Optional</sup> <a name="ExpressionAttributeNamesInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExpressionAttributeNamesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ProjectionExpressionInput`<sup>Optional</sup> <a name="ProjectionExpressionInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput"></a>

```csharp
public string ProjectionExpressionInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `ExpressionAttributeNames`<sup>Required</sup> <a name="ExpressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExpressionAttributeNames { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ProjectionExpression`<sup>Required</sup> <a name="ProjectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression"></a>

```csharp
public string ProjectionExpression { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbTableItemConfig <a name="DataAwsDynamodbTableItemConfig" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsDynamodbTableItemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    string TableName,
    System.Collections.Generic.IDictionary<string, string> ExpressionAttributeNames = null,
    string Id = null,
    string ProjectionExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames">ExpressionAttributeNames</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression">ProjectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}.

---

##### `ExpressionAttributeNames`<sup>Optional</sup> <a name="ExpressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExpressionAttributeNames { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectionExpression`<sup>Optional</sup> <a name="ProjectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression"></a>

```csharp
public string ProjectionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}.

---



