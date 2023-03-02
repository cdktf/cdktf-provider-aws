# `sesv2EmailIdentity` Submodule <a name="`sesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentity <a name="Sesv2EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentity(Construct Scope, string Id, Sesv2EmailIdentityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes">PutDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName">ResetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes">ResetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDkimSigningAttributes` <a name="PutDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes"></a>

```csharp
private void PutDkimSigningAttributes(Sesv2EmailIdentityDkimSigningAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `ResetConfigurationSetName` <a name="ResetConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName"></a>

```csharp
private void ResetConfigurationSetName()
```

##### `ResetDkimSigningAttributes` <a name="ResetDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes"></a>

```csharp
private void ResetDkimSigningAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentity.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus">VerifiedForSendingStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput">ConfigurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput">DkimSigningAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DkimSigningAttributes`<sup>Required</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes"></a>

```csharp
public Sesv2EmailIdentityDkimSigningAttributesOutputReference DkimSigningAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `VerifiedForSendingStatus`<sup>Required</sup> <a name="VerifiedForSendingStatus" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```csharp
public IResolvable VerifiedForSendingStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConfigurationSetNameInput`<sup>Optional</sup> <a name="ConfigurationSetNameInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput"></a>

```csharp
public string ConfigurationSetNameInput { get; }
```

- *Type:* string

---

##### `DkimSigningAttributesInput`<sup>Optional</sup> <a name="DkimSigningAttributesInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput"></a>

```csharp
public Sesv2EmailIdentityDkimSigningAttributes DkimSigningAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput"></a>

```csharp
public string EmailIdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; }
```

- *Type:* string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityConfig <a name="Sesv2EmailIdentityConfig" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailIdentity,
    string ConfigurationSetName = null,
    Sesv2EmailIdentityDkimSigningAttributes DkimSigningAttributes = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName">ConfigurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes">DkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `ConfigurationSetName`<sup>Optional</sup> <a name="ConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName"></a>

```csharp
public string ConfigurationSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `DkimSigningAttributes`<sup>Optional</sup> <a name="DkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes"></a>

```csharp
public Sesv2EmailIdentityDkimSigningAttributes DkimSigningAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

### Sesv2EmailIdentityDkimSigningAttributes <a name="Sesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityDkimSigningAttributes {
    string DomainSigningPrivateKey = null,
    string DomainSigningSelector = null,
    string NextSigningKeyLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}. |

---

##### `DomainSigningPrivateKey`<sup>Optional</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```csharp
public string DomainSigningPrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

##### `DomainSigningSelector`<sup>Optional</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```csharp
public string DomainSigningSelector { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

##### `NextSigningKeyLength`<sup>Optional</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```csharp
public string NextSigningKeyLength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2EmailIdentityDkimSigningAttributesOutputReference <a name="Sesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityDkimSigningAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">ResetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">ResetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">ResetNextSigningKeyLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDomainSigningPrivateKey` <a name="ResetDomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```csharp
private void ResetDomainSigningPrivateKey()
```

##### `ResetDomainSigningSelector` <a name="ResetDomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```csharp
private void ResetDomainSigningSelector()
```

##### `ResetNextSigningKeyLength` <a name="ResetNextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```csharp
private void ResetNextSigningKeyLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">CurrentSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">LastKeyGenerationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">SigningAttributesOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">Tokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">DomainSigningPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">DomainSigningSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">NextSigningKeyLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">DomainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">DomainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">NextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSigningKeyLength`<sup>Required</sup> <a name="CurrentSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```csharp
public string CurrentSigningKeyLength { get; }
```

- *Type:* string

---

##### `LastKeyGenerationTimestamp`<sup>Required</sup> <a name="LastKeyGenerationTimestamp" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```csharp
public string LastKeyGenerationTimestamp { get; }
```

- *Type:* string

---

##### `SigningAttributesOrigin`<sup>Required</sup> <a name="SigningAttributesOrigin" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```csharp
public string SigningAttributesOrigin { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```csharp
public string[] Tokens { get; }
```

- *Type:* string[]

---

##### `DomainSigningPrivateKeyInput`<sup>Optional</sup> <a name="DomainSigningPrivateKeyInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```csharp
public string DomainSigningPrivateKeyInput { get; }
```

- *Type:* string

---

##### `DomainSigningSelectorInput`<sup>Optional</sup> <a name="DomainSigningSelectorInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```csharp
public string DomainSigningSelectorInput { get; }
```

- *Type:* string

---

##### `NextSigningKeyLengthInput`<sup>Optional</sup> <a name="NextSigningKeyLengthInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```csharp
public string NextSigningKeyLengthInput { get; }
```

- *Type:* string

---

##### `DomainSigningPrivateKey`<sup>Required</sup> <a name="DomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```csharp
public string DomainSigningPrivateKey { get; }
```

- *Type:* string

---

##### `DomainSigningSelector`<sup>Required</sup> <a name="DomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```csharp
public string DomainSigningSelector { get; }
```

- *Type:* string

---

##### `NextSigningKeyLength`<sup>Required</sup> <a name="NextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```csharp
public string NextSigningKeyLength { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```csharp
public Sesv2EmailIdentityDkimSigningAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---



