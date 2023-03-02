# `configOrganizationManagedRule` Submodule <a name="`configOrganizationManagedRule` Submodule" id="@cdktf/provider-aws.configOrganizationManagedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationManagedRule <a name="ConfigOrganizationManagedRule" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule aws_config_organization_managed_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationManagedRule(Construct Scope, string Id, ConfigOrganizationManagedRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ConfigOrganizationManagedRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts"></a>

```csharp
private void ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters"></a>

```csharp
private void ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency"></a>

```csharp
private void ResetMaximumExecutionFrequency()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope"></a>

```csharp
private void ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope"></a>

```csharp
private void ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope"></a>

```csharp
private void ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope"></a>

```csharp
private void ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationManagedRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationManagedRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ConfigOrganizationManagedRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput">InputParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput">RuleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters">InputParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts"></a>

```csharp
public ConfigOrganizationManagedRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput"></a>

```csharp
public string[] ExcludedAccountsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput"></a>

```csharp
public string InputParametersInput { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput"></a>

```csharp
public string MaximumExecutionFrequencyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput"></a>

```csharp
public string ResourceIdScopeInput { get; }
```

- *Type:* string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput"></a>

```csharp
public string[] ResourceTypesScopeInput { get; }
```

- *Type:* string[]

---

##### `RuleIdentifierInput`<sup>Optional</sup> <a name="RuleIdentifierInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput"></a>

```csharp
public string RuleIdentifierInput { get; }
```

- *Type:* string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput"></a>

```csharp
public string TagKeyScopeInput { get; }
```

- *Type:* string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput"></a>

```csharp
public string TagValueScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters"></a>

```csharp
public string InputParameters { get; }
```

- *Type:* string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; }
```

- *Type:* string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; }
```

- *Type:* string[]

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; }
```

- *Type:* string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; }
```

- *Type:* string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationManagedRuleConfig <a name="ConfigOrganizationManagedRuleConfig" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationManagedRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RuleIdentifier,
    string Description = null,
    string[] ExcludedAccounts = null,
    string Id = null,
    string InputParameters = null,
    string MaximumExecutionFrequency = null,
    string ResourceIdScope = null,
    string[] ResourceTypesScope = null,
    string TagKeyScope = null,
    string TagValueScope = null,
    ConfigOrganizationManagedRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier">RuleIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters">InputParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}.

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier"></a>

```csharp
public string RuleIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts"></a>

```csharp
public string[] ExcludedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters"></a>

```csharp
public string InputParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency"></a>

```csharp
public string MaximumExecutionFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope"></a>

```csharp
public string ResourceIdScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope"></a>

```csharp
public string[] ResourceTypesScope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope"></a>

```csharp
public string TagKeyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope"></a>

```csharp
public string TagValueScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts"></a>

```csharp
public ConfigOrganizationManagedRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}

---

### ConfigOrganizationManagedRuleTimeouts <a name="ConfigOrganizationManagedRuleTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationManagedRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationManagedRuleTimeoutsOutputReference <a name="ConfigOrganizationManagedRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ConfigOrganizationManagedRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



