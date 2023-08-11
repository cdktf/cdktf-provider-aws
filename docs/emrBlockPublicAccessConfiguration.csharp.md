# `aws_emr_block_public_access_configuration`

Refer to the Terraform Registory for docs: [`aws_emr_block_public_access_configuration`](https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration).

# `emrBlockPublicAccessConfiguration` Submodule <a name="`emrBlockPublicAccessConfiguration` Submodule" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrBlockPublicAccessConfiguration <a name="EmrBlockPublicAccessConfiguration" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrBlockPublicAccessConfiguration(Construct Scope, string Id, EmrBlockPublicAccessConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig">EmrBlockPublicAccessConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig">EmrBlockPublicAccessConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange">PutPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange">ResetPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPermittedPublicSecurityGroupRuleRange` <a name="PutPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange"></a>

```csharp
private void PutPermittedPublicSecurityGroupRuleRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermittedPublicSecurityGroupRuleRange` <a name="ResetPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange"></a>

```csharp
private void ResetPermittedPublicSecurityGroupRuleRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrBlockPublicAccessConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrBlockPublicAccessConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrBlockPublicAccessConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange">PermittedPublicSecurityGroupRuleRange</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput">BlockPublicSecurityGroupRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput">PermittedPublicSecurityGroupRuleRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules">BlockPublicSecurityGroupRules</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PermittedPublicSecurityGroupRuleRange`<sup>Required</sup> <a name="PermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange"></a>

```csharp
public EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList PermittedPublicSecurityGroupRuleRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a>

---

##### `BlockPublicSecurityGroupRulesInput`<sup>Optional</sup> <a name="BlockPublicSecurityGroupRulesInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput"></a>

```csharp
public object BlockPublicSecurityGroupRulesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermittedPublicSecurityGroupRuleRangeInput`<sup>Optional</sup> <a name="PermittedPublicSecurityGroupRuleRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput"></a>

```csharp
public object PermittedPublicSecurityGroupRuleRangeInput { get; }
```

- *Type:* object

---

##### `BlockPublicSecurityGroupRules`<sup>Required</sup> <a name="BlockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules"></a>

```csharp
public object BlockPublicSecurityGroupRules { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrBlockPublicAccessConfigurationConfig <a name="EmrBlockPublicAccessConfigurationConfig" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrBlockPublicAccessConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object BlockPublicSecurityGroupRules,
    string Id = null,
    object PermittedPublicSecurityGroupRuleRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules">BlockPublicSecurityGroupRules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange">PermittedPublicSecurityGroupRuleRange</a></code> | <code>object</code> | permitted_public_security_group_rule_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlockPublicSecurityGroupRules`<sup>Required</sup> <a name="BlockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules"></a>

```csharp
public object BlockPublicSecurityGroupRules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PermittedPublicSecurityGroupRuleRange`<sup>Optional</sup> <a name="PermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange"></a>

```csharp
public object PermittedPublicSecurityGroupRuleRange { get; set; }
```

- *Type:* object

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
    double MaxRange,
    double MinRange
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange">MaxRange</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange">MinRange</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}. |

---

##### `MaxRange`<sup>Required</sup> <a name="MaxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange"></a>

```csharp
public double MaxRange { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}.

---

##### `MinRange`<sup>Required</sup> <a name="MinRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange"></a>

```csharp
public double MinRange { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.12.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get"></a>

```csharp
private EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput">MaxRangeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput">MinRangeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange">MaxRange</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange">MinRange</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRangeInput`<sup>Optional</sup> <a name="MaxRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput"></a>

```csharp
public double MaxRangeInput { get; }
```

- *Type:* double

---

##### `MinRangeInput`<sup>Optional</sup> <a name="MinRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput"></a>

```csharp
public double MinRangeInput { get; }
```

- *Type:* double

---

##### `MaxRange`<sup>Required</sup> <a name="MaxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange"></a>

```csharp
public double MaxRange { get; }
```

- *Type:* double

---

##### `MinRange`<sup>Required</sup> <a name="MinRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange"></a>

```csharp
public double MinRange { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



