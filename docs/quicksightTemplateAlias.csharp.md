# `aws_quicksight_template_alias`

Refer to the Terraform Registory for docs: [`aws_quicksight_template_alias`](https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias).

# `quicksightTemplateAlias` Submodule <a name="`quicksightTemplateAlias` Submodule" id="@cdktf/provider-aws.quicksightTemplateAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplateAlias <a name="QuicksightTemplateAlias" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias aws_quicksight_template_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateAlias(Construct Scope, string Id, QuicksightTemplateAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig">QuicksightTemplateAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig">QuicksightTemplateAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplateAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplateAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightTemplateAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput">TemplateVersionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber">TemplateVersionNumber</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TemplateVersionNumberInput`<sup>Optional</sup> <a name="TemplateVersionNumberInput" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumberInput"></a>

```csharp
public double TemplateVersionNumberInput { get; }
```

- *Type:* double

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

##### `TemplateVersionNumber`<sup>Required</sup> <a name="TemplateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.templateVersionNumber"></a>

```csharp
public double TemplateVersionNumber { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateAliasConfig <a name="QuicksightTemplateAliasConfig" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightTemplateAliasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AliasName,
    string TemplateId,
    double TemplateVersionNumber,
    string AwsAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber">TemplateVersionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#alias_name QuicksightTemplateAlias#alias_name}.

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#template_id QuicksightTemplateAlias#template_id}.

---

##### `TemplateVersionNumber`<sup>Required</sup> <a name="TemplateVersionNumber" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.templateVersionNumber"></a>

```csharp
public double TemplateVersionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#template_version_number QuicksightTemplateAlias#template_version_number}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightTemplateAlias.QuicksightTemplateAliasConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.10.0/docs/resources/quicksight_template_alias#aws_account_id QuicksightTemplateAlias#aws_account_id}.

---



