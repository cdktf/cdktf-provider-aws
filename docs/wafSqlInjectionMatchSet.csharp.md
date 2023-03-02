# `wafSqlInjectionMatchSet` Submodule <a name="`wafSqlInjectionMatchSet` Submodule" id="@cdktf/provider-aws.wafSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSqlInjectionMatchSet <a name="WafSqlInjectionMatchSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set aws_waf_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSet(Construct Scope, string Id, WafSqlInjectionMatchSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples">PutSqlInjectionMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples">ResetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSqlInjectionMatchTuples` <a name="PutSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples"></a>

```csharp
private void PutSqlInjectionMatchTuples(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSqlInjectionMatchTuples` <a name="ResetSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples"></a>

```csharp
private void ResetSqlInjectionMatchTuples()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafSqlInjectionMatchSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafSqlInjectionMatchSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WafSqlInjectionMatchSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput">SqlInjectionMatchTuplesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SqlInjectionMatchTuples`<sup>Required</sup> <a name="SqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesList SqlInjectionMatchTuples { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlInjectionMatchTuplesInput`<sup>Optional</sup> <a name="SqlInjectionMatchTuplesInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput"></a>

```csharp
public object SqlInjectionMatchTuplesInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafSqlInjectionMatchSetConfig <a name="WafSqlInjectionMatchSetConfig" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    object SqlInjectionMatchTuples = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples">SqlInjectionMatchTuples</a></code> | <code>object</code> | sql_injection_match_tuples block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlInjectionMatchTuples`<sup>Optional</sup> <a name="SqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples"></a>

```csharp
public object SqlInjectionMatchTuples { get; set; }
```

- *Type:* object

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuples <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuples" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuples {
    WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatch,
    string TextTransformation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation">TextTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}. |

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation"></a>

```csharp
public string TextTransformation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}.

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch {
    string Type,
    string Data = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}.

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData">ResetData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetData` <a name="ResetData" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData"></a>

```csharp
private void ResetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesList <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesList" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get"></a>

```csharp
private WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch">PutFieldToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldToMatch` <a name="PutFieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch"></a>

```csharp
private void PutFieldToMatch(WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch">FieldToMatch</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput">FieldToMatchInput</a></code> | <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput">TextTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation">TextTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldToMatch`<sup>Required</sup> <a name="FieldToMatch" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference FieldToMatch { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a>

---

##### `FieldToMatchInput`<sup>Optional</sup> <a name="FieldToMatchInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```csharp
public WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch FieldToMatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---

##### `TextTransformationInput`<sup>Optional</sup> <a name="TextTransformationInput" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput"></a>

```csharp
public string TextTransformationInput { get; }
```

- *Type:* string

---

##### `TextTransformation`<sup>Required</sup> <a name="TextTransformation" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation"></a>

```csharp
public string TextTransformation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



