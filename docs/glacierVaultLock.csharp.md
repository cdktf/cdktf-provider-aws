# `glacierVaultLock` Submodule <a name="`glacierVaultLock` Submodule" id="@cdktf/provider-aws.glacierVaultLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlacierVaultLock <a name="GlacierVaultLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock aws_glacier_vault_lock}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlacierVaultLock(Construct Scope, string Id, GlacierVaultLockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig">GlacierVaultLockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig">GlacierVaultLockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError">ResetIgnoreDeletionError</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreDeletionError` <a name="ResetIgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.resetIgnoreDeletionError"></a>

```csharp
private void ResetIgnoreDeletionError()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlacierVaultLock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlacierVaultLock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlacierVaultLock.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput">CompleteLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput">IgnoreDeletionErrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput">VaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock">CompleteLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError">IgnoreDeletionError</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName">VaultName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CompleteLockInput`<sup>Optional</sup> <a name="CompleteLockInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLockInput"></a>

```csharp
public object CompleteLockInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreDeletionErrorInput`<sup>Optional</sup> <a name="IgnoreDeletionErrorInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionErrorInput"></a>

```csharp
public object IgnoreDeletionErrorInput { get; }
```

- *Type:* object

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultNameInput"></a>

```csharp
public string VaultNameInput { get; }
```

- *Type:* string

---

##### `CompleteLock`<sup>Required</sup> <a name="CompleteLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.completeLock"></a>

```csharp
public object CompleteLock { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreDeletionError`<sup>Required</sup> <a name="IgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.ignoreDeletionError"></a>

```csharp
public object IgnoreDeletionError { get; }
```

- *Type:* object

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.vaultName"></a>

```csharp
public string VaultName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlacierVaultLockConfig <a name="GlacierVaultLockConfig" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlacierVaultLockConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object CompleteLock,
    string Policy,
    string VaultName,
    string Id = null,
    object IgnoreDeletionError = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock">CompleteLock</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName">VaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}. |
| <code><a href="#@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError">IgnoreDeletionError</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompleteLock`<sup>Required</sup> <a name="CompleteLock" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.completeLock"></a>

```csharp
public object CompleteLock { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#complete_lock GlacierVaultLock#complete_lock}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#policy GlacierVaultLock#policy}.

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.vaultName"></a>

```csharp
public string VaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#vault_name GlacierVaultLock#vault_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#id GlacierVaultLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreDeletionError`<sup>Optional</sup> <a name="IgnoreDeletionError" id="@cdktf/provider-aws.glacierVaultLock.GlacierVaultLockConfig.property.ignoreDeletionError"></a>

```csharp
public object IgnoreDeletionError { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}.

---



