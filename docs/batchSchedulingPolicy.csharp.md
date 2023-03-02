# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktf/provider-aws.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicy(Construct Scope, string Id, BatchSchedulingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy">PutFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy">ResetFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFairSharePolicy` <a name="PutFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy"></a>

```csharp
private void PutFairSharePolicy(BatchSchedulingPolicyFairSharePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.putFairSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `ResetFairSharePolicy` <a name="ResetFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairSharePolicy"></a>

```csharp
private void ResetFairSharePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchSchedulingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchSchedulingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchSchedulingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy">FairSharePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput">FairSharePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FairSharePolicy`<sup>Required</sup> <a name="FairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicyOutputReference FairSharePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference">BatchSchedulingPolicyFairSharePolicyOutputReference</a>

---

##### `FairSharePolicyInput`<sup>Optional</sup> <a name="FairSharePolicyInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairSharePolicyInput"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy FairSharePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    BatchSchedulingPolicyFairSharePolicy FairSharePolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy">FairSharePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | fair_share_policy block. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#name BatchSchedulingPolicy#name}.

---

##### `FairSharePolicy`<sup>Optional</sup> <a name="FairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairSharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy FairSharePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

fair_share_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#id BatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}.

---

### BatchSchedulingPolicyFairSharePolicy <a name="BatchSchedulingPolicyFairSharePolicy" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicy {
    double ComputeReservation = null,
    double ShareDecaySeconds = null,
    object ShareDistribution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution">ShareDistribution</a></code> | <code>object</code> | share_distribution block. |

---

##### `ComputeReservation`<sup>Optional</sup> <a name="ComputeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `ShareDecaySeconds`<sup>Optional</sup> <a name="ShareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `ShareDistribution`<sup>Optional</sup> <a name="ShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy.property.shareDistribution"></a>

```csharp
public object ShareDistribution { get; set; }
```

- *Type:* object

share_distribution block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairSharePolicyShareDistribution <a name="BatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistribution {
    string ShareIdentifier,
    double WeightFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor">WeightFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `WeightFactor`<sup>Optional</sup> <a name="WeightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistribution.property.weightFactor"></a>

```csharp
public double WeightFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairSharePolicyOutputReference <a name="BatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution">PutShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation">ResetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds">ResetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution">ResetShareDistribution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShareDistribution` <a name="PutShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution"></a>

```csharp
private void PutShareDistribution(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* object

---

##### `ResetComputeReservation` <a name="ResetComputeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetComputeReservation"></a>

```csharp
private void ResetComputeReservation()
```

##### `ResetShareDecaySeconds` <a name="ResetShareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDecaySeconds"></a>

```csharp
private void ResetShareDecaySeconds()
```

##### `ResetShareDistribution` <a name="ResetShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.resetShareDistribution"></a>

```csharp
private void ResetShareDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput">ComputeReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput">ShareDecaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput">ShareDistributionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicyShareDistributionList ShareDistribution { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList">BatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `ComputeReservationInput`<sup>Optional</sup> <a name="ComputeReservationInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservationInput"></a>

```csharp
public double ComputeReservationInput { get; }
```

- *Type:* double

---

##### `ShareDecaySecondsInput`<sup>Optional</sup> <a name="ShareDecaySecondsInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```csharp
public double ShareDecaySecondsInput { get; }
```

- *Type:* double

---

##### `ShareDistributionInput`<sup>Optional</sup> <a name="ShareDistributionInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistributionInput"></a>

```csharp
public object ShareDistributionInput { get; }
```

- *Type:* object

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; }
```

- *Type:* double

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```csharp
public BatchSchedulingPolicyFairSharePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicy">BatchSchedulingPolicyFairSharePolicy</a>

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```csharp
private BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor">ResetWeightFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeightFactor` <a name="ResetWeightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```csharp
private void ResetWeightFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput">ShareIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput">WeightFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareIdentifierInput`<sup>Optional</sup> <a name="ShareIdentifierInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```csharp
public string ShareIdentifierInput { get; }
```

- *Type:* string

---

##### `WeightFactorInput`<sup>Optional</sup> <a name="WeightFactorInput" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```csharp
public double WeightFactorInput { get; }
```

- *Type:* double

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; }
```

- *Type:* string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```csharp
public double WeightFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchSchedulingPolicy.BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



