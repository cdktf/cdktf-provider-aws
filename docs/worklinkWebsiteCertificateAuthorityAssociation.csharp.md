# `worklinkWebsiteCertificateAuthorityAssociation` Submodule <a name="`worklinkWebsiteCertificateAuthorityAssociation` Submodule" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkWebsiteCertificateAuthorityAssociation <a name="WorklinkWebsiteCertificateAuthorityAssociation" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association aws_worklink_website_certificate_authority_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkWebsiteCertificateAuthorityAssociation(Construct Scope, string Id, WorklinkWebsiteCertificateAuthorityAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkWebsiteCertificateAuthorityAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkWebsiteCertificateAuthorityAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

WorklinkWebsiteCertificateAuthorityAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId">WebsiteCaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput">FleetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn">FleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `WebsiteCaId`<sup>Required</sup> <a name="WebsiteCaId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId"></a>

```csharp
public string WebsiteCaId { get; }
```

- *Type:* string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FleetArnInput`<sup>Optional</sup> <a name="FleetArnInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput"></a>

```csharp
public string FleetArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn"></a>

```csharp
public string FleetArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkWebsiteCertificateAuthorityAssociationConfig <a name="WorklinkWebsiteCertificateAuthorityAssociationConfig" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new WorklinkWebsiteCertificateAuthorityAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Certificate,
    string FleetArn,
    string DisplayName = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate">Certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn">FleetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}.

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn"></a>

```csharp
public string FleetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



