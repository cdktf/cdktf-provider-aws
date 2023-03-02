# `iamServiceSpecificCredential` Submodule <a name="`iamServiceSpecificCredential` Submodule" id="@cdktf/provider-aws.iamServiceSpecificCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamServiceSpecificCredential <a name="IamServiceSpecificCredential" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential aws_iam_service_specific_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamServiceSpecificCredential(Construct Scope, string Id, IamServiceSpecificCredentialConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig">IamServiceSpecificCredentialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig">IamServiceSpecificCredentialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamServiceSpecificCredential.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamServiceSpecificCredential.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamServiceSpecificCredential.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.servicePassword">ServicePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceSpecificCredentialId">ServiceSpecificCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceUserName">ServiceUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ServicePassword`<sup>Required</sup> <a name="ServicePassword" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.servicePassword"></a>

```csharp
public string ServicePassword { get; }
```

- *Type:* string

---

##### `ServiceSpecificCredentialId`<sup>Required</sup> <a name="ServiceSpecificCredentialId" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceSpecificCredentialId"></a>

```csharp
public string ServiceSpecificCredentialId { get; }
```

- *Type:* string

---

##### `ServiceUserName`<sup>Required</sup> <a name="ServiceUserName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceUserName"></a>

```csharp
public string ServiceUserName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredential.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamServiceSpecificCredentialConfig <a name="IamServiceSpecificCredentialConfig" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamServiceSpecificCredentialConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceName,
    string UserName,
    string Id = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#id IamServiceSpecificCredential#id}. |
| <code><a href="#@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#status IamServiceSpecificCredential#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#id IamServiceSpecificCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.iamServiceSpecificCredential.IamServiceSpecificCredentialConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_service_specific_credential#status IamServiceSpecificCredential#status}.

---



