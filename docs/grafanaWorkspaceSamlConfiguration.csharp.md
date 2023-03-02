# `grafanaWorkspaceSamlConfiguration` Submodule <a name="`grafanaWorkspaceSamlConfiguration` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GrafanaWorkspaceSamlConfiguration(Construct Scope, string Id, GrafanaWorkspaceSamlConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig">GrafanaWorkspaceSamlConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues">ResetAdminRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations">ResetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion">ResetEmailAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion">ResetGroupsAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl">ResetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml">ResetIdpMetadataXml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion">ResetLoginAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration">ResetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion">ResetNameAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion">ResetOrgAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion">ResetRoleAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(GrafanaWorkspaceSamlConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

---

##### `ResetAdminRoleValues` <a name="ResetAdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues"></a>

```csharp
private void ResetAdminRoleValues()
```

##### `ResetAllowedOrganizations` <a name="ResetAllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations"></a>

```csharp
private void ResetAllowedOrganizations()
```

##### `ResetEmailAssertion` <a name="ResetEmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion"></a>

```csharp
private void ResetEmailAssertion()
```

##### `ResetGroupsAssertion` <a name="ResetGroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion"></a>

```csharp
private void ResetGroupsAssertion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpMetadataUrl` <a name="ResetIdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl"></a>

```csharp
private void ResetIdpMetadataUrl()
```

##### `ResetIdpMetadataXml` <a name="ResetIdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml"></a>

```csharp
private void ResetIdpMetadataXml()
```

##### `ResetLoginAssertion` <a name="ResetLoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion"></a>

```csharp
private void ResetLoginAssertion()
```

##### `ResetLoginValidityDuration` <a name="ResetLoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration"></a>

```csharp
private void ResetLoginValidityDuration()
```

##### `ResetNameAssertion` <a name="ResetNameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion"></a>

```csharp
private void ResetNameAssertion()
```

##### `ResetOrgAssertion` <a name="ResetOrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion"></a>

```csharp
private void ResetOrgAssertion()
```

##### `ResetRoleAssertion` <a name="ResetRoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion"></a>

```csharp
private void ResetRoleAssertion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GrafanaWorkspaceSamlConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GrafanaWorkspaceSamlConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GrafanaWorkspaceSamlConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput">AdminRoleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput">AllowedOrganizationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput">EditorRoleValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput">EmailAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput">GroupsAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput">IdpMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput">IdpMetadataXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput">LoginAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput">LoginValidityDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput">NameAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput">OrgAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput">RoleAssertionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues">AdminRoleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues">EditorRoleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion">EmailAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion">GroupsAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion">LoginAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion">NameAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion">OrgAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion">RoleAssertion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a>

---

##### `AdminRoleValuesInput`<sup>Optional</sup> <a name="AdminRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput"></a>

```csharp
public string[] AdminRoleValuesInput { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizationsInput`<sup>Optional</sup> <a name="AllowedOrganizationsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput"></a>

```csharp
public string[] AllowedOrganizationsInput { get; }
```

- *Type:* string[]

---

##### `EditorRoleValuesInput`<sup>Optional</sup> <a name="EditorRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput"></a>

```csharp
public string[] EditorRoleValuesInput { get; }
```

- *Type:* string[]

---

##### `EmailAssertionInput`<sup>Optional</sup> <a name="EmailAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput"></a>

```csharp
public string EmailAssertionInput { get; }
```

- *Type:* string

---

##### `GroupsAssertionInput`<sup>Optional</sup> <a name="GroupsAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput"></a>

```csharp
public string GroupsAssertionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpMetadataUrlInput`<sup>Optional</sup> <a name="IdpMetadataUrlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput"></a>

```csharp
public string IdpMetadataUrlInput { get; }
```

- *Type:* string

---

##### `IdpMetadataXmlInput`<sup>Optional</sup> <a name="IdpMetadataXmlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput"></a>

```csharp
public string IdpMetadataXmlInput { get; }
```

- *Type:* string

---

##### `LoginAssertionInput`<sup>Optional</sup> <a name="LoginAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput"></a>

```csharp
public string LoginAssertionInput { get; }
```

- *Type:* string

---

##### `LoginValidityDurationInput`<sup>Optional</sup> <a name="LoginValidityDurationInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput"></a>

```csharp
public double LoginValidityDurationInput { get; }
```

- *Type:* double

---

##### `NameAssertionInput`<sup>Optional</sup> <a name="NameAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput"></a>

```csharp
public string NameAssertionInput { get; }
```

- *Type:* string

---

##### `OrgAssertionInput`<sup>Optional</sup> <a name="OrgAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput"></a>

```csharp
public string OrgAssertionInput { get; }
```

- *Type:* string

---

##### `RoleAssertionInput`<sup>Optional</sup> <a name="RoleAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput"></a>

```csharp
public string RoleAssertionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AdminRoleValues`<sup>Required</sup> <a name="AdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues"></a>

```csharp
public string[] AdminRoleValues { get; }
```

- *Type:* string[]

---

##### `AllowedOrganizations`<sup>Required</sup> <a name="AllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```csharp
public string[] AllowedOrganizations { get; }
```

- *Type:* string[]

---

##### `EditorRoleValues`<sup>Required</sup> <a name="EditorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues"></a>

```csharp
public string[] EditorRoleValues { get; }
```

- *Type:* string[]

---

##### `EmailAssertion`<sup>Required</sup> <a name="EmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion"></a>

```csharp
public string EmailAssertion { get; }
```

- *Type:* string

---

##### `GroupsAssertion`<sup>Required</sup> <a name="GroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion"></a>

```csharp
public string GroupsAssertion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpMetadataUrl`<sup>Required</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; }
```

- *Type:* string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml"></a>

```csharp
public string IdpMetadataXml { get; }
```

- *Type:* string

---

##### `LoginAssertion`<sup>Required</sup> <a name="LoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion"></a>

```csharp
public string LoginAssertion { get; }
```

- *Type:* string

---

##### `LoginValidityDuration`<sup>Required</sup> <a name="LoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```csharp
public double LoginValidityDuration { get; }
```

- *Type:* double

---

##### `NameAssertion`<sup>Required</sup> <a name="NameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion"></a>

```csharp
public string NameAssertion { get; }
```

- *Type:* string

---

##### `OrgAssertion`<sup>Required</sup> <a name="OrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion"></a>

```csharp
public string OrgAssertion { get; }
```

- *Type:* string

---

##### `RoleAssertion`<sup>Required</sup> <a name="RoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion"></a>

```csharp
public string RoleAssertion { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceSamlConfigurationConfig <a name="GrafanaWorkspaceSamlConfigurationConfig" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GrafanaWorkspaceSamlConfigurationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] EditorRoleValues,
    string WorkspaceId,
    string[] AdminRoleValues = null,
    string[] AllowedOrganizations = null,
    string EmailAssertion = null,
    string GroupsAssertion = null,
    string Id = null,
    string IdpMetadataUrl = null,
    string IdpMetadataXml = null,
    string LoginAssertion = null,
    double LoginValidityDuration = null,
    string NameAssertion = null,
    string OrgAssertion = null,
    string RoleAssertion = null,
    GrafanaWorkspaceSamlConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues">EditorRoleValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues">AdminRoleValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations">AllowedOrganizations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion">EmailAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion">GroupsAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl">IdpMetadataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion">LoginAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration">LoginValidityDuration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion">NameAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion">OrgAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion">RoleAssertion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EditorRoleValues`<sup>Required</sup> <a name="EditorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues"></a>

```csharp
public string[] EditorRoleValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `AdminRoleValues`<sup>Optional</sup> <a name="AdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues"></a>

```csharp
public string[] AdminRoleValues { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `AllowedOrganizations`<sup>Optional</sup> <a name="AllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations"></a>

```csharp
public string[] AllowedOrganizations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `EmailAssertion`<sup>Optional</sup> <a name="EmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion"></a>

```csharp
public string EmailAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `GroupsAssertion`<sup>Optional</sup> <a name="GroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion"></a>

```csharp
public string GroupsAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpMetadataUrl`<sup>Optional</sup> <a name="IdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl"></a>

```csharp
public string IdpMetadataUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `IdpMetadataXml`<sup>Optional</sup> <a name="IdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml"></a>

```csharp
public string IdpMetadataXml { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `LoginAssertion`<sup>Optional</sup> <a name="LoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion"></a>

```csharp
public string LoginAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `LoginValidityDuration`<sup>Optional</sup> <a name="LoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration"></a>

```csharp
public double LoginValidityDuration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `NameAssertion`<sup>Optional</sup> <a name="NameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion"></a>

```csharp
public string NameAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `OrgAssertion`<sup>Optional</sup> <a name="OrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion"></a>

```csharp
public string OrgAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `RoleAssertion`<sup>Optional</sup> <a name="RoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion"></a>

```csharp
public string RoleAssertion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts"></a>

```csharp
public GrafanaWorkspaceSamlConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

### GrafanaWorkspaceSamlConfigurationTimeouts <a name="GrafanaWorkspaceSamlConfigurationTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GrafanaWorkspaceSamlConfigurationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference <a name="GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



