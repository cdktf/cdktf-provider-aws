# `ivsPlaybackKeyPair` Submodule <a name="`ivsPlaybackKeyPair` Submodule" id="@cdktf/provider-aws.ivsPlaybackKeyPair"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsPlaybackKeyPair <a name="IvsPlaybackKeyPair" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair aws_ivs_playback_key_pair}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvsPlaybackKeyPair(Construct Scope, string Id, IvsPlaybackKeyPairConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig">IvsPlaybackKeyPairConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts"></a>

```csharp
private void PutTimeouts(IvsPlaybackKeyPairTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvsPlaybackKeyPair.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvsPlaybackKeyPair.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvsPlaybackKeyPair.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeouts"></a>

```csharp
public IvsPlaybackKeyPairTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference">IvsPlaybackKeyPairTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPair.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsPlaybackKeyPairConfig <a name="IvsPlaybackKeyPairConfig" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvsPlaybackKeyPairConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PublicKey,
    string Id = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IvsPlaybackKeyPairTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#public_key IvsPlaybackKeyPair#public_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#id IvsPlaybackKeyPair#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#name IvsPlaybackKeyPair#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags IvsPlaybackKeyPair#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#tags_all IvsPlaybackKeyPair#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairConfig.property.timeouts"></a>

```csharp
public IvsPlaybackKeyPairTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts">IvsPlaybackKeyPairTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#timeouts IvsPlaybackKeyPair#timeouts}

---

### IvsPlaybackKeyPairTimeouts <a name="IvsPlaybackKeyPairTimeouts" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvsPlaybackKeyPairTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#create IvsPlaybackKeyPair#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivs_playback_key_pair#delete IvsPlaybackKeyPair#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvsPlaybackKeyPairTimeoutsOutputReference <a name="IvsPlaybackKeyPairTimeoutsOutputReference" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvsPlaybackKeyPairTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivsPlaybackKeyPair.IvsPlaybackKeyPairTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



