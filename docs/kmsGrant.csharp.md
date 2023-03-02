# `kmsGrant` Submodule <a name="`kmsGrant` Submodule" id="@cdktf/provider-aws.kmsGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGrant <a name="KmsGrant" id="@cdktf/provider-aws.kmsGrant.KmsGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_grant aws_kms_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsGrant(Construct Scope, string Id, KmsGrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig">KmsGrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.kmsGrant.KmsGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig">KmsGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints">PutConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints">ResetConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens">ResetGrantCreationTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete">ResetRetireOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal">ResetRetiringPrincipal</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kmsGrant.KmsGrant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConstraints` <a name="PutConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints"></a>

```csharp
private void PutConstraints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.kmsGrant.KmsGrant.putConstraints.parameter.value"></a>

- *Type:* object

---

##### `ResetConstraints` <a name="ResetConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetConstraints"></a>

```csharp
private void ResetConstraints()
```

##### `ResetGrantCreationTokens` <a name="ResetGrantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetGrantCreationTokens"></a>

```csharp
private void ResetGrantCreationTokens()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRetireOnDelete` <a name="ResetRetireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetireOnDelete"></a>

```csharp
private void ResetRetireOnDelete()
```

##### `ResetRetiringPrincipal` <a name="ResetRetiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.resetRetiringPrincipal"></a>

```csharp
private void ResetRetiringPrincipal()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsGrant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsGrant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

KmsGrant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.kmsGrant.KmsGrant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints">Constraints</a></code> | <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId">GrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken">GrantToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput">ConstraintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput">GrantCreationTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput">GranteePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput">RetireOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput">RetiringPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens">GrantCreationTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal">GranteePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete">RetireOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal">RetiringPrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraints"></a>

```csharp
public KmsGrantConstraintsList Constraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList">KmsGrantConstraintsList</a>

---

##### `GrantId`<sup>Required</sup> <a name="GrantId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantId"></a>

```csharp
public string GrantId { get; }
```

- *Type:* string

---

##### `GrantToken`<sup>Required</sup> <a name="GrantToken" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantToken"></a>

```csharp
public string GrantToken { get; }
```

- *Type:* string

---

##### `ConstraintsInput`<sup>Optional</sup> <a name="ConstraintsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.constraintsInput"></a>

```csharp
public object ConstraintsInput { get; }
```

- *Type:* object

---

##### `GrantCreationTokensInput`<sup>Optional</sup> <a name="GrantCreationTokensInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokensInput"></a>

```csharp
public string[] GrantCreationTokensInput { get; }
```

- *Type:* string[]

---

##### `GranteePrincipalInput`<sup>Optional</sup> <a name="GranteePrincipalInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipalInput"></a>

```csharp
public string GranteePrincipalInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `RetireOnDeleteInput`<sup>Optional</sup> <a name="RetireOnDeleteInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDeleteInput"></a>

```csharp
public object RetireOnDeleteInput { get; }
```

- *Type:* object

---

##### `RetiringPrincipalInput`<sup>Optional</sup> <a name="RetiringPrincipalInput" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipalInput"></a>

```csharp
public string RetiringPrincipalInput { get; }
```

- *Type:* string

---

##### `GrantCreationTokens`<sup>Required</sup> <a name="GrantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.grantCreationTokens"></a>

```csharp
public string[] GrantCreationTokens { get; }
```

- *Type:* string[]

---

##### `GranteePrincipal`<sup>Required</sup> <a name="GranteePrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.granteePrincipal"></a>

```csharp
public string GranteePrincipal { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `RetireOnDelete`<sup>Required</sup> <a name="RetireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retireOnDelete"></a>

```csharp
public object RetireOnDelete { get; }
```

- *Type:* object

---

##### `RetiringPrincipal`<sup>Required</sup> <a name="RetiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.retiringPrincipal"></a>

```csharp
public string RetiringPrincipal { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kmsGrant.KmsGrant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGrantConfig <a name="KmsGrantConfig" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsGrantConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GranteePrincipal,
    string KeyId,
    string[] Operations,
    object Constraints = null,
    string[] GrantCreationTokens = null,
    string Id = null,
    string Name = null,
    object RetireOnDelete = null,
    string RetiringPrincipal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal">GranteePrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations">Operations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints">Constraints</a></code> | <code>object</code> | constraints block. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens">GrantCreationTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete">RetireOnDelete</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal">RetiringPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GranteePrincipal`<sup>Required</sup> <a name="GranteePrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.granteePrincipal"></a>

```csharp
public string GranteePrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grantee_principal KmsGrant#grantee_principal}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#key_id KmsGrant#key_id}.

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#operations KmsGrant#operations}.

---

##### `Constraints`<sup>Optional</sup> <a name="Constraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.constraints"></a>

```csharp
public object Constraints { get; set; }
```

- *Type:* object

constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#constraints KmsGrant#constraints}

---

##### `GrantCreationTokens`<sup>Optional</sup> <a name="GrantCreationTokens" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.grantCreationTokens"></a>

```csharp
public string[] GrantCreationTokens { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#id KmsGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#name KmsGrant#name}.

---

##### `RetireOnDelete`<sup>Optional</sup> <a name="RetireOnDelete" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retireOnDelete"></a>

```csharp
public object RetireOnDelete { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retire_on_delete KmsGrant#retire_on_delete}.

---

##### `RetiringPrincipal`<sup>Optional</sup> <a name="RetiringPrincipal" id="@cdktf/provider-aws.kmsGrant.KmsGrantConfig.property.retiringPrincipal"></a>

```csharp
public string RetiringPrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#retiring_principal KmsGrant#retiring_principal}.

---

### KmsGrantConstraints <a name="KmsGrantConstraints" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsGrantConstraints {
    System.Collections.Generic.IDictionary<string, string> EncryptionContextEquals = null,
    System.Collections.Generic.IDictionary<string, string> EncryptionContextSubset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals">EncryptionContextEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset">EncryptionContextSubset</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}. |

---

##### `EncryptionContextEquals`<sup>Optional</sup> <a name="EncryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextEquals { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}.

---

##### `EncryptionContextSubset`<sup>Optional</sup> <a name="EncryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraints.property.encryptionContextSubset"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextSubset { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGrantConstraintsList <a name="KmsGrantConstraintsList" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsGrantConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get"></a>

```csharp
private KmsGrantConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KmsGrantConstraintsOutputReference <a name="KmsGrantConstraintsOutputReference" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new KmsGrantConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals">ResetEncryptionContextEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset">ResetEncryptionContextSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionContextEquals` <a name="ResetEncryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextEquals"></a>

```csharp
private void ResetEncryptionContextEquals()
```

##### `ResetEncryptionContextSubset` <a name="ResetEncryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.resetEncryptionContextSubset"></a>

```csharp
private void ResetEncryptionContextSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput">EncryptionContextEqualsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput">EncryptionContextSubsetInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals">EncryptionContextEquals</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset">EncryptionContextSubset</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContextEqualsInput`<sup>Optional</sup> <a name="EncryptionContextEqualsInput" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEqualsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextEqualsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionContextSubsetInput`<sup>Optional</sup> <a name="EncryptionContextSubsetInput" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubsetInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextSubsetInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionContextEquals`<sup>Required</sup> <a name="EncryptionContextEquals" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextEquals"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextEquals { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EncryptionContextSubset`<sup>Required</sup> <a name="EncryptionContextSubset" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.encryptionContextSubset"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> EncryptionContextSubset { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kmsGrant.KmsGrantConstraintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



