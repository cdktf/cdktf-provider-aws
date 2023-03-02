# `auditmanagerOrganizationAdminAccountRegistration` Submodule <a name="`auditmanagerOrganizationAdminAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerOrganizationAdminAccountRegistration <a name="AuditmanagerOrganizationAdminAccountRegistration" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerOrganizationAdminAccountRegistration(Construct Scope, string Id, AuditmanagerOrganizationAdminAccountRegistrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig">AuditmanagerOrganizationAdminAccountRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerOrganizationAdminAccountRegistration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerOrganizationAdminAccountRegistration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AuditmanagerOrganizationAdminAccountRegistration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput">AdminAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `AdminAccountIdInput`<sup>Optional</sup> <a name="AdminAccountIdInput" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput"></a>

```csharp
public string AdminAccountIdInput { get; }
```

- *Type:* string

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerOrganizationAdminAccountRegistrationConfig <a name="AuditmanagerOrganizationAdminAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AuditmanagerOrganizationAdminAccountRegistrationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AdminAccountId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId">AdminAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AdminAccountId`<sup>Required</sup> <a name="AdminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId"></a>

```csharp
public string AdminAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}.

---



