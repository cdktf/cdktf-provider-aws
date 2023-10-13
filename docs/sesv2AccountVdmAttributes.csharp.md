# `aws_sesv2_account_vdm_attributes`

Refer to the Terraform Registory for docs: [`aws_sesv2_account_vdm_attributes`](https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes).

# `sesv2AccountVdmAttributes` Submodule <a name="`sesv2AccountVdmAttributes` Submodule" id="@cdktf/provider-aws.sesv2AccountVdmAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2AccountVdmAttributes <a name="Sesv2AccountVdmAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes aws_sesv2_account_vdm_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributes(Construct Scope, string Id, Sesv2AccountVdmAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig">Sesv2AccountVdmAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes">PutDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes">PutGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes">ResetDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes">ResetGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDashboardAttributes` <a name="PutDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes"></a>

```csharp
private void PutDashboardAttributes(Sesv2AccountVdmAttributesDashboardAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putDashboardAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `PutGuardianAttributes` <a name="PutGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes"></a>

```csharp
private void PutGuardianAttributes(Sesv2AccountVdmAttributesGuardianAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.putGuardianAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `ResetDashboardAttributes` <a name="ResetDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetDashboardAttributes"></a>

```csharp
private void ResetDashboardAttributes()
```

##### `ResetGuardianAttributes` <a name="ResetGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetGuardianAttributes"></a>

```csharp
private void ResetGuardianAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2AccountVdmAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2AccountVdmAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2AccountVdmAttributes.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput">DashboardAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput">GuardianAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput">VdmEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled">VdmEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DashboardAttributes`<sup>Required</sup> <a name="DashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributesOutputReference DashboardAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference">Sesv2AccountVdmAttributesDashboardAttributesOutputReference</a>

---

##### `GuardianAttributes`<sup>Required</sup> <a name="GuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributesOutputReference GuardianAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference">Sesv2AccountVdmAttributesGuardianAttributesOutputReference</a>

---

##### `DashboardAttributesInput`<sup>Optional</sup> <a name="DashboardAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.dashboardAttributesInput"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---

##### `GuardianAttributesInput`<sup>Optional</sup> <a name="GuardianAttributesInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.guardianAttributesInput"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `VdmEnabledInput`<sup>Optional</sup> <a name="VdmEnabledInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabledInput"></a>

```csharp
public string VdmEnabledInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.vdmEnabled"></a>

```csharp
public string VdmEnabled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2AccountVdmAttributesConfig <a name="Sesv2AccountVdmAttributesConfig" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VdmEnabled,
    Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributes = null,
    Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributes = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled">VdmEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes">DashboardAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | dashboard_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes">GuardianAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | guardian_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VdmEnabled`<sup>Required</sup> <a name="VdmEnabled" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.vdmEnabled"></a>

```csharp
public string VdmEnabled { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#vdm_enabled Sesv2AccountVdmAttributes#vdm_enabled}.

---

##### `DashboardAttributes`<sup>Optional</sup> <a name="DashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.dashboardAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes DashboardAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

dashboard_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#dashboard_attributes Sesv2AccountVdmAttributes#dashboard_attributes}

---

##### `GuardianAttributes`<sup>Optional</sup> <a name="GuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.guardianAttributes"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes GuardianAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

guardian_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#guardian_attributes Sesv2AccountVdmAttributes#guardian_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#id Sesv2AccountVdmAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### Sesv2AccountVdmAttributesDashboardAttributes <a name="Sesv2AccountVdmAttributesDashboardAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributesDashboardAttributes {
    string EngagementMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}. |

---

##### `EngagementMetrics`<sup>Optional</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#engagement_metrics Sesv2AccountVdmAttributes#engagement_metrics}.

---

### Sesv2AccountVdmAttributesGuardianAttributes <a name="Sesv2AccountVdmAttributesGuardianAttributes" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributesGuardianAttributes {
    string OptimizedSharedDelivery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}. |

---

##### `OptimizedSharedDelivery`<sup>Optional</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.21.0/docs/resources/sesv2_account_vdm_attributes#optimized_shared_delivery Sesv2AccountVdmAttributes#optimized_shared_delivery}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2AccountVdmAttributesDashboardAttributesOutputReference <a name="Sesv2AccountVdmAttributesDashboardAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributesDashboardAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics">ResetEngagementMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngagementMetrics` <a name="ResetEngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.resetEngagementMetrics"></a>

```csharp
private void ResetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput">EngagementMetricsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngagementMetricsInput`<sup>Optional</sup> <a name="EngagementMetricsInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetricsInput"></a>

```csharp
public string EngagementMetricsInput { get; }
```

- *Type:* string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.engagementMetrics"></a>

```csharp
public string EngagementMetrics { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributesOutputReference.property.internalValue"></a>

```csharp
public Sesv2AccountVdmAttributesDashboardAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesDashboardAttributes">Sesv2AccountVdmAttributesDashboardAttributes</a>

---


### Sesv2AccountVdmAttributesGuardianAttributesOutputReference <a name="Sesv2AccountVdmAttributesGuardianAttributesOutputReference" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2AccountVdmAttributesGuardianAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery">ResetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptimizedSharedDelivery` <a name="ResetOptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.resetOptimizedSharedDelivery"></a>

```csharp
private void ResetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput">OptimizedSharedDeliveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptimizedSharedDeliveryInput`<sup>Optional</sup> <a name="OptimizedSharedDeliveryInput" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDeliveryInput"></a>

```csharp
public string OptimizedSharedDeliveryInput { get; }
```

- *Type:* string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.optimizedSharedDelivery"></a>

```csharp
public string OptimizedSharedDelivery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributesOutputReference.property.internalValue"></a>

```csharp
public Sesv2AccountVdmAttributesGuardianAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2AccountVdmAttributes.Sesv2AccountVdmAttributesGuardianAttributes">Sesv2AccountVdmAttributesGuardianAttributes</a>

---



