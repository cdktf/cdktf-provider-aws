# `aws_ssmcontacts_plan`

Refer to the Terraform Registory for docs: [`aws_ssmcontacts_plan`](https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan).

# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktf/provider-aws.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlan(Construct Scope, string Id, SsmcontactsPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage">PutStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutStage` <a name="PutStage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage"></a>

```csharp
private void PutStage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.putStage.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsPlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage">Stage</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">ContactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput">StageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId">ContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stage"></a>

```csharp
public SsmcontactsPlanStageList Stage { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList">SsmcontactsPlanStageList</a>

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```csharp
public string ContactIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.stageInput"></a>

```csharp
public object StageInput { get; }
```

- *Type:* object

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```csharp
public string ContactId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContactId,
    object Stage,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">ContactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage">Stage</a></code> | <code>object</code> | stage block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```csharp
public string ContactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.stage"></a>

```csharp
public object Stage { get; set; }
```

- *Type:* object

stage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SsmcontactsPlanStage <a name="SsmcontactsPlanStage" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStage {
    double DurationInMinutes,
    object Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target">Target</a></code> | <code>object</code> | target block. |

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStage.property.target"></a>

```csharp
public object Target { get; set; }
```

- *Type:* object

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#target SsmcontactsPlan#target}

---

### SsmcontactsPlanStageTarget <a name="SsmcontactsPlanStageTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTarget {
    SsmcontactsPlanStageTargetChannelTargetInfo ChannelTargetInfo = null,
    SsmcontactsPlanStageTargetContactTargetInfo ContactTargetInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | channel_target_info block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | contact_target_info block. |

---

##### `ChannelTargetInfo`<sup>Optional</sup> <a name="ChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.channelTargetInfo"></a>

```csharp
public SsmcontactsPlanStageTargetChannelTargetInfo ChannelTargetInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

channel_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `ContactTargetInfo`<sup>Optional</sup> <a name="ContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTarget.property.contactTargetInfo"></a>

```csharp
public SsmcontactsPlanStageTargetContactTargetInfo ContactTargetInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

contact_target_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStageTargetChannelTargetInfo <a name="SsmcontactsPlanStageTargetChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetChannelTargetInfo {
    string ContactChannelId,
    double RetryIntervalInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId">ContactChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}. |

---

##### `ContactChannelId`<sup>Required</sup> <a name="ContactChannelId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.contactChannelId"></a>

```csharp
public string ContactChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}.

---

##### `RetryIntervalInMinutes`<sup>Optional</sup> <a name="RetryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo.property.retryIntervalInMinutes"></a>

```csharp
public double RetryIntervalInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}.

---

### SsmcontactsPlanStageTargetContactTargetInfo <a name="SsmcontactsPlanStageTargetContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetContactTargetInfo {
    object IsEssential,
    string ContactId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential">IsEssential</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId">ContactId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}. |

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.isEssential"></a>

```csharp
public object IsEssential { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}.

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo.property.contactId"></a>

```csharp
public string ContactId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStageList <a name="SsmcontactsPlanStageList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get"></a>

```csharp
private SsmcontactsPlanStageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsPlanStageOutputReference <a name="SsmcontactsPlanStageOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget"></a>

```csharp
private void PutTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.putTarget.parameter.value"></a>

- *Type:* object

---

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput">TargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.target"></a>

```csharp
public SsmcontactsPlanStageTargetList Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList">SsmcontactsPlanStageTargetList</a>

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutesInput"></a>

```csharp
public double DurationInMinutesInput { get; }
```

- *Type:* double

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.targetInput"></a>

```csharp
public object TargetInput { get; }
```

- *Type:* object

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsPlanStageTargetChannelTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetChannelTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetChannelTargetInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">ResetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetryIntervalInMinutes` <a name="ResetRetryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```csharp
private void ResetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput">ContactChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">RetryIntervalInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId">ContactChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactChannelIdInput`<sup>Optional</sup> <a name="ContactChannelIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelIdInput"></a>

```csharp
public string ContactChannelIdInput { get; }
```

- *Type:* string

---

##### `RetryIntervalInMinutesInput`<sup>Optional</sup> <a name="RetryIntervalInMinutesInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```csharp
public double RetryIntervalInMinutesInput { get; }
```

- *Type:* double

---

##### `ContactChannelId`<sup>Required</sup> <a name="ContactChannelId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId"></a>

```csharp
public string ContactChannelId { get; }
```

- *Type:* string

---

##### `RetryIntervalInMinutes`<sup>Required</sup> <a name="RetryIntervalInMinutes" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```csharp
public double RetryIntervalInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue"></a>

```csharp
public SsmcontactsPlanStageTargetChannelTargetInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---


### SsmcontactsPlanStageTargetContactTargetInfoOutputReference <a name="SsmcontactsPlanStageTargetContactTargetInfoOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetContactTargetInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId">ResetContactId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactId` <a name="ResetContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.resetContactId"></a>

```csharp
private void ResetContactId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput">ContactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput">IsEssentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId">ContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential">IsEssential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactIdInput"></a>

```csharp
public string ContactIdInput { get; }
```

- *Type:* string

---

##### `IsEssentialInput`<sup>Optional</sup> <a name="IsEssentialInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssentialInput"></a>

```csharp
public object IsEssentialInput { get; }
```

- *Type:* object

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId"></a>

```csharp
public string ContactId { get; }
```

- *Type:* string

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential"></a>

```csharp
public object IsEssential { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue"></a>

```csharp
public SsmcontactsPlanStageTargetContactTargetInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---


### SsmcontactsPlanStageTargetList <a name="SsmcontactsPlanStageTargetList" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get"></a>

```csharp
private SsmcontactsPlanStageTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsPlanStageTargetOutputReference <a name="SsmcontactsPlanStageTargetOutputReference" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsPlanStageTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo">PutChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo">PutContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo">ResetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo">ResetContactTargetInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChannelTargetInfo` <a name="PutChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo"></a>

```csharp
private void PutChannelTargetInfo(SsmcontactsPlanStageTargetChannelTargetInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---

##### `PutContactTargetInfo` <a name="PutContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo"></a>

```csharp
private void PutContactTargetInfo(SsmcontactsPlanStageTargetContactTargetInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---

##### `ResetChannelTargetInfo` <a name="ResetChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetChannelTargetInfo"></a>

```csharp
private void ResetChannelTargetInfo()
```

##### `ResetContactTargetInfo` <a name="ResetContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.resetContactTargetInfo"></a>

```csharp
private void ResetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput">ChannelTargetInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput">ContactTargetInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelTargetInfo`<sup>Required</sup> <a name="ChannelTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo"></a>

```csharp
public SsmcontactsPlanStageTargetChannelTargetInfoOutputReference ChannelTargetInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfoOutputReference">SsmcontactsPlanStageTargetChannelTargetInfoOutputReference</a>

---

##### `ContactTargetInfo`<sup>Required</sup> <a name="ContactTargetInfo" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo"></a>

```csharp
public SsmcontactsPlanStageTargetContactTargetInfoOutputReference ContactTargetInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfoOutputReference">SsmcontactsPlanStageTargetContactTargetInfoOutputReference</a>

---

##### `ChannelTargetInfoInput`<sup>Optional</sup> <a name="ChannelTargetInfoInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.channelTargetInfoInput"></a>

```csharp
public SsmcontactsPlanStageTargetChannelTargetInfo ChannelTargetInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetChannelTargetInfo">SsmcontactsPlanStageTargetChannelTargetInfo</a>

---

##### `ContactTargetInfoInput`<sup>Optional</sup> <a name="ContactTargetInfoInput" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.contactTargetInfoInput"></a>

```csharp
public SsmcontactsPlanStageTargetContactTargetInfo ContactTargetInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetContactTargetInfo">SsmcontactsPlanStageTargetContactTargetInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsPlan.SsmcontactsPlanStageTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



