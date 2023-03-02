# `emrStudioSessionMapping` Submodule <a name="`emrStudioSessionMapping` Submodule" id="@cdktf/provider-aws.emrStudioSessionMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudioSessionMapping <a name="EmrStudioSessionMapping" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping aws_emr_studio_session_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrStudioSessionMapping(Construct Scope, string Id, EmrStudioSessionMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig">EmrStudioSessionMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig">EmrStudioSessionMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityId">ResetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityName">ResetIdentityName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityId` <a name="ResetIdentityId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityId"></a>

```csharp
private void ResetIdentityId()
```

##### `ResetIdentityName` <a name="ResetIdentityName" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.resetIdentityName"></a>

```csharp
private void ResetIdentityName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrStudioSessionMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrStudioSessionMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrStudioSessionMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityIdInput">IdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput">IdentityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput">SessionPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput">StudioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityId">IdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName">IdentityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn">SessionPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId">StudioId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdentityIdInput`<sup>Optional</sup> <a name="IdentityIdInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityIdInput"></a>

```csharp
public string IdentityIdInput { get; }
```

- *Type:* string

---

##### `IdentityNameInput`<sup>Optional</sup> <a name="IdentityNameInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput"></a>

```csharp
public string IdentityNameInput { get; }
```

- *Type:* string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SessionPolicyArnInput`<sup>Optional</sup> <a name="SessionPolicyArnInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput"></a>

```csharp
public string SessionPolicyArnInput { get; }
```

- *Type:* string

---

##### `StudioIdInput`<sup>Optional</sup> <a name="StudioIdInput" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput"></a>

```csharp
public string StudioIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityId`<sup>Required</sup> <a name="IdentityId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityId"></a>

```csharp
public string IdentityId { get; }
```

- *Type:* string

---

##### `IdentityName`<sup>Required</sup> <a name="IdentityName" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName"></a>

```csharp
public string IdentityName { get; }
```

- *Type:* string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `SessionPolicyArn`<sup>Required</sup> <a name="SessionPolicyArn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn"></a>

```csharp
public string SessionPolicyArn { get; }
```

- *Type:* string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId"></a>

```csharp
public string StudioId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioSessionMappingConfig <a name="EmrStudioSessionMappingConfig" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrStudioSessionMappingConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IdentityType,
    string SessionPolicyArn,
    string StudioId,
    string Id = null,
    string IdentityId = null,
    string IdentityName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType">IdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn">SessionPolicyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId">StudioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityId">IdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}. |
| <code><a href="#@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName">IdentityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}.

---

##### `SessionPolicyArn`<sup>Required</sup> <a name="SessionPolicyArn" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn"></a>

```csharp
public string SessionPolicyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}.

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId"></a>

```csharp
public string StudioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#id EmrStudioSessionMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityId`<sup>Optional</sup> <a name="IdentityId" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityId"></a>

```csharp
public string IdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}.

---

##### `IdentityName`<sup>Optional</sup> <a name="IdentityName" id="@cdktf/provider-aws.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName"></a>

```csharp
public string IdentityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}.

---



