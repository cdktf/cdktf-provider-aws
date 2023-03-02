# `acmpcaCertificateAuthorityCertificate` Submodule <a name="`acmpcaCertificateAuthorityCertificate` Submodule" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthorityCertificate <a name="AcmpcaCertificateAuthorityCertificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate aws_acmpca_certificate_authority_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificateAuthorityCertificate(Construct Scope, string Id, AcmpcaCertificateAuthorityCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig">AcmpcaCertificateAuthorityCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig">AcmpcaCertificateAuthorityCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetCertificateChain"></a>

```csharp
private void ResetCertificateChain()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificateAuthorityCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificateAuthorityCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AcmpcaCertificateAuthorityCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChainInput">CertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChain">CertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArnInput"></a>

```csharp
public string CertificateAuthorityArnInput { get; }
```

- *Type:* string

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChainInput"></a>

```csharp
public string CertificateChainInput { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; }
```

- *Type:* string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.certificateChain"></a>

```csharp
public string CertificateChain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityCertificateConfig <a name="AcmpcaCertificateAuthorityCertificateConfig" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AcmpcaCertificateAuthorityCertificateConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate,
    string CertificateAuthorityArn,
    string CertificateChain = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate AcmpcaCertificateAuthorityCertificate#certificate}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateChain">CertificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#id AcmpcaCertificateAuthorityCertificate#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate AcmpcaCertificateAuthorityCertificate#certificate}.

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateAuthorityArn"></a>

```csharp
public string CertificateAuthorityArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_authority_arn AcmpcaCertificateAuthorityCertificate#certificate_authority_arn}.

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.certificateChain"></a>

```csharp
public string CertificateChain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#certificate_chain AcmpcaCertificateAuthorityCertificate#certificate_chain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.acmpcaCertificateAuthorityCertificate.AcmpcaCertificateAuthorityCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority_certificate#id AcmpcaCertificateAuthorityCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



