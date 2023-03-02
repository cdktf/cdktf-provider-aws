# `prometheusRuleGroupNamespace` Submodule <a name="`prometheusRuleGroupNamespace` Submodule" id="@cdktf/provider-aws.prometheusRuleGroupNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusRuleGroupNamespace <a name="PrometheusRuleGroupNamespace" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace aws_prometheus_rule_group_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PrometheusRuleGroupNamespace(Construct Scope, string Id, PrometheusRuleGroupNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig">PrometheusRuleGroupNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig">PrometheusRuleGroupNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PrometheusRuleGroupNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PrometheusRuleGroupNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PrometheusRuleGroupNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusRuleGroupNamespaceConfig <a name="PrometheusRuleGroupNamespaceConfig" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PrometheusRuleGroupNamespaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Data,
    string Name,
    string WorkspaceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data">Data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#data PrometheusRuleGroupNamespace#data}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#name PrometheusRuleGroupNamespace#name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#workspace_id PrometheusRuleGroupNamespace#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.prometheusRuleGroupNamespace.PrometheusRuleGroupNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/prometheus_rule_group_namespace#id PrometheusRuleGroupNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



