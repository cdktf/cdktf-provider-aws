# `wafregionalSqlInjectionMatchSet` Submodule <a name="`wafregionalSqlInjectionMatchSet` Submodule" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalSqlInjectionMatchSet <a name="WafregionalSqlInjectionMatchSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set aws_wafregional_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSet(Construct Scope, string Id, WafregionalSqlInjectionMatchSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig">WafregionalSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple">PutSqlInjectionMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple">ResetSqlInjectionMatchTuple</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSqlInjectionMatchTuple` <a name="PutSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple"></a>

```csharp
private void PutSqlInjectionMatchTuple(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.putSqlInjectionMatchTuple.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSqlInjectionMatchTuple` <a name="ResetSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.resetSqlInjectionMatchTuple"></a>

```csharp
private void ResetSqlInjectionMatchTuple()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafregionalSqlInjectionMatchSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple">SqlInjectionMatchTuple</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput">SqlInjectionMatchTupleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SqlInjectionMatchTuple`<sup>Required</sup> <a name="SqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTuple"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList SqlInjectionMatchTuple { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlInjectionMatchTupleInput`<sup>Optional</sup> <a name="SqlInjectionMatchTupleInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.sqlInjectionMatchTupleInput"></a>

```csharp
public object SqlInjectionMatchTupleInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalSqlInjectionMatchSetConfig <a name="WafregionalSqlInjectionMatchSetConfig" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    object SqlInjectionMatchTuple = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple">SqlInjectionMatchTuple</a></code> | <code>object</code> | sql_injection_match_tuple block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#name WafregionalSqlInjectionMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#id WafregionalSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlInjectionMatchTuple`<sup>Optional</sup> <a name="SqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuple"></a>

```csharp
public object SqlInjectionMatchTuple { get; set; }
```

- *Type:* object

sql_injection_match_tuple block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatch,
    string TextTransformation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation">TextTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.fieldToMatch"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple.property.textTransformation"></a>

```csharp
public string TextTransformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}.

---

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    string Type,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#type WafregionalSqlInjectionMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set#data WafregionalSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get"></a>

```csharp
private WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference <a name="WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch"></a>

```csharp
private void PutFieldToMatch(WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation">TextTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatch"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference FieldToMatch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.fieldToMatchInput"></a>

```csharp
public WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch FieldToMatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch">WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformationInput"></a>

```csharp
public string TextTransformationInput { get; }
```

- *Type:* string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.textTransformation"></a>

```csharp
public string TextTransformation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafregionalSqlInjectionMatchSet.WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



