# `acmpcaCertificate` Submodule <a name="`acmpcaCertificate` Submodule" id="@cdktf/provider-aws.acmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificate <a name="AcmpcaCertificate" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate aws_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificate(Construct Scope, string Id, AcmpcaCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity">PutValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn">ResetTemplateArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutValidity` <a name="PutValidity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity"></a>

```csharp
private void PutValidity(AcmpcaCertificateValidity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTemplateArn` <a name="ResetTemplateArn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn"></a>

```csharp
private void ResetTemplateArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validity">Validity</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput">CertificateSigningRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput">TemplateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validityInput">ValidityInput</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest">CertificateSigningRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArn">TemplateArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validity"></a>

```csharp
public AcmpcaCertificateValidityOutputReference Validity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a>

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput"></a>

```csharp
public string CertificateAuthorityArnInput { get; }
```

- *Type:* string

---

##### `CertificateSigningRequestInput`<sup>Optional</sup> <a name="CertificateSigningRequestInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput"></a>

```csharp
public string CertificateSigningRequestInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput"></a>

```csharp
public string SigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `TemplateArnInput`<sup>Optional</sup> <a name="TemplateArnInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput"></a>

```csharp
public string TemplateArnInput { get; }
```

- *Type:* string

---

##### `ValidityInput`<sup>Optional</sup> <a name="ValidityInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.validityInput"></a>

```csharp
public AcmpcaCertificateValidity ValidityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; }
```

- *Type:* string

---

##### `CertificateSigningRequest`<sup>Required</sup> <a name="CertificateSigningRequest" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest"></a>

```csharp
public string CertificateSigningRequest { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; }
```

- *Type:* string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.templateArn"></a>

```csharp
public string TemplateArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateConfig <a name="AcmpcaCertificateConfig" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificateConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateAuthorityArn,
    string CertificateSigningRequest,
    string SigningAlgorithm,
    AcmpcaCertificateValidity Validity,
    string Id = null,
    string TemplateArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest">CertificateSigningRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.validity">Validity</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | validity block. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#id AcmpcaCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn">TemplateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}.

---

##### `CertificateSigningRequest`<sup>Required</sup> <a name="CertificateSigningRequest" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest"></a>

```csharp
public string CertificateSigningRequest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}.

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm"></a>

```csharp
public string SigningAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}.

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.validity"></a>

```csharp
public AcmpcaCertificateValidity Validity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

validity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#id AcmpcaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TemplateArn`<sup>Optional</sup> <a name="TemplateArn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn"></a>

```csharp
public string TemplateArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}.

---

### AcmpcaCertificateValidity <a name="AcmpcaCertificateValidity" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificateValidity {
    string Type,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#type AcmpcaCertificate#type}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#value AcmpcaCertificate#value}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#type AcmpcaCertificate#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate#value AcmpcaCertificate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateValidityOutputReference <a name="AcmpcaCertificateValidityOutputReference" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificateValidityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```csharp
public AcmpcaCertificateValidity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---



