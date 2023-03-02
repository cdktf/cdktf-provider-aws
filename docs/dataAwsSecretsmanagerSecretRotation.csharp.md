# `dataAwsSecretsmanagerSecretRotation` Submodule <a name="`dataAwsSecretsmanagerSecretRotation` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerSecretRotation <a name="DataAwsSecretsmanagerSecretRotation" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerSecretRotation(Construct Scope, string Id, DataAwsSecretsmanagerSecretRotationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig">DataAwsSecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerSecretRotation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerSecretRotation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataAwsSecretsmanagerSecretRotation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled">RotationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationEnabled"></a>

```csharp
public IResolvable RotationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```csharp
public string RotationLambdaArn { get; }
```

- *Type:* string

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.rotationRules"></a>

```csharp
public DataAwsSecretsmanagerSecretRotationRotationRulesList RotationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList">DataAwsSecretsmanagerSecretRotationRotationRulesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerSecretRotationConfig <a name="DataAwsSecretsmanagerSecretRotationConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerSecretRotationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecretId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation#id DataAwsSecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSecretsmanagerSecretRotationRotationRules <a name="DataAwsSecretsmanagerSecretRotationRotationRules" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerSecretRotationRotationRules {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecretsmanagerSecretRotationRotationRulesList <a name="DataAwsSecretsmanagerSecretRotationRotationRulesList" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerSecretRotationRotationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get"></a>

```csharp
private DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference <a name="DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```csharp
public double AutomaticallyAfterDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsSecretsmanagerSecretRotationRotationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretRotation.DataAwsSecretsmanagerSecretRotationRotationRules">DataAwsSecretsmanagerSecretRotationRotationRules</a>

---



