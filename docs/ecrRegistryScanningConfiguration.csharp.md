# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfiguration(Construct Scope, string Id, EcrRegistryScanningConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig">EcrRegistryScanningConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule"></a>

```csharp
private void PutRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule"></a>

```csharp
private void ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrRegistryScanningConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrRegistryScanningConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrRegistryScanningConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput">RuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">ScanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">ScanType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule"></a>

```csharp
public EcrRegistryScanningConfigurationRuleList Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput"></a>

```csharp
public object RuleInput { get; }
```

- *Type:* object

---

##### `ScanTypeInput`<sup>Optional</sup> <a name="ScanTypeInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```csharp
public string ScanTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScanType`<sup>Required</sup> <a name="ScanType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```csharp
public string ScanType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ScanType,
    string Id = null,
    object Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">ScanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule">Rule</a></code> | <code>object</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ScanType`<sup>Required</sup> <a name="ScanType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```csharp
public string ScanType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule"></a>

```csharp
public object Rule { get; set; }
```

- *Type:* object

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#rule EcrRegistryScanningConfiguration#rule}

---

### EcrRegistryScanningConfigurationRule <a name="EcrRegistryScanningConfigurationRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRule {
    object RepositoryFilter,
    string ScanFrequency
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter">RepositoryFilter</a></code> | <code>object</code> | repository_filter block. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency">ScanFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}. |

---

##### `RepositoryFilter`<sup>Required</sup> <a name="RepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter"></a>

```csharp
public object RepositoryFilter { get; set; }
```

- *Type:* object

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#repository_filter EcrRegistryScanningConfiguration#repository_filter}

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency"></a>

```csharp
public string ScanFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}.

---

### EcrRegistryScanningConfigurationRuleRepositoryFilter <a name="EcrRegistryScanningConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRuleRepositoryFilter {
    string Filter,
    string FilterType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType">FilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}.

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRuleList <a name="EcrRegistryScanningConfigurationRuleList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get"></a>

```csharp
private EcrRegistryScanningConfigurationRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrRegistryScanningConfigurationRuleOutputReference <a name="EcrRegistryScanningConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter">PutRepositoryFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepositoryFilter` <a name="PutRepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter"></a>

```csharp
private void PutRepositoryFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter">RepositoryFilter</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput">RepositoryFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput">ScanFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency">ScanFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryFilter`<sup>Required</sup> <a name="RepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter"></a>

```csharp
public EcrRegistryScanningConfigurationRuleRepositoryFilterList RepositoryFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a>

---

##### `RepositoryFilterInput`<sup>Optional</sup> <a name="RepositoryFilterInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```csharp
public object RepositoryFilterInput { get; }
```

- *Type:* object

---

##### `ScanFrequencyInput`<sup>Optional</sup> <a name="ScanFrequencyInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput"></a>

```csharp
public string ScanFrequencyInput { get; }
```

- *Type:* string

---

##### `ScanFrequency`<sup>Required</sup> <a name="ScanFrequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency"></a>

```csharp
public string ScanFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterList <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRuleRepositoryFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get"></a>

```csharp
private EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



